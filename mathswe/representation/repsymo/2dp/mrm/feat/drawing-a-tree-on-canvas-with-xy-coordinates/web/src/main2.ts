// Copyright (c) 2022 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: MIT
// This file is part of https://github.com/mathsoftware/engineer

import './main.css';
import { newTreeNode, TreeNode } from './model';
import { SolutionTreeCanvas } from './mrm-canvas';

main().then(console.log);

async function main() {
  const path = 'root-node.json';
  const tree = await fetchTree(path);

  window.onresize = () => render(tree);
  render(tree);
  return 'Initialized';
}

function render(tree) {
  const canvasEl = document.getElementById('solutionTree') as HTMLCanvasElement;
  const canvas = new SolutionTreeCanvas();
  canvas.rootNode = tree;

  canvas.init(canvasEl);
  canvas.render();
}

async function fetchTree(path: string): Promise<TreeNode> {
  const onError = reason => showError({ reason, msg: 'Failed to fetch tree' });
  let tree = newTreeNode();

  try {
    const res = await fetch(path);

    if (res.ok) {
      tree = await res.json();
    } else {
      onError(new Error(res.statusText));
    }
  } catch (reason) {
    onError(reason);
  }
  return tree;
}

interface Error {
  reason: any;
  msg: string;
}

function showError(error: Error) {
  document.getElementById('error').innerText = errorMsg(error);
  return error;
}

function errorMsg(error: Error): string {
  const { reason, msg } = error;
  return `${ msg }: ${ reason }`;
}
