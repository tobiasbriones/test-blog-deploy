---
permalink: building-slides-from-screenshots-app-in-javafx/slides---ep/src/main/java/engineer/mathsoftware/blog/slides/lang/Spec.java.html
title: "building-slides-from-screenshots-app-in-javafx/slides---ep/src/main/java/engineer/mathsoftware/blog/slides/lang/Spec.java"
---

# Spec.java
```java
// Copyright (c) 2023 Tobias Briones. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
// This file is part of https://github.com/tobiasbriones/blog

package engineer.mathsoftware.blog.slides.lang;

import engineer.mathsoftware.blog.slides.Language;

public final class Spec {
    public static final class CSharp {
        public enum Keyword {
            Abstract,
            As,
            Base,
            Bool,
            Break,
            Byte,
            Case,
            Catch,
            Char,
            Checked,
            Class,
            Const,
            Continue,
            Decimal,
            Default,
            Delegate,
            Do,
            Double,
            Else,
            Enum,
            Event,
            Explicit,
            Extern,
            False,
            Finally,
            Fixed,
            Float,
            For,
            Foreach,
            Goto,
            If,
            Implicit,
            In,
            Int,
            Interface,
            Internal,
            Is,
            Lock,
            Long,
            Namespace,
            New,
            Null,
            Object,
            Operator,
            Out,
            Override,
            Params,
            Private,
            Protected,
            Public,
            Readonly,
            Ref,
            Return,
            Sbyte,
            Sealed,
            Short,
            Sizeof,
            Stackalloc,
            Static,
            String,
            Struct,
            Switch,
            This,
            Throw,
            True,
            Try,
            Typeof,
            Uint,
            Ulong,
            Unchecked,
            Unsafe,
            Ushort,
            Using,
            Virtual,
            Void,
            Volatile,
            While
        }
    }

    public static final class Golang {
        public enum Keyword {
            Break,
            Default,
            Func,
            Interface,
            Select,
            Case,
            Defer,
            Go,
            Map,
            Struct,
            Chan,
            Else,
            Goto,
            Package,
            Switch,
            Const,
            Fallthrough,
            If,
            Range,
            Type,
            Continue,
            For,
            Import,
            Return,
            Var
        }
    }

    public static final class Haskell {
        public enum Keyword {
            Module,
            Import,
            Where,
            If,
            Then,
            Else,
            Case,
            Data,
            Type,
            Deriving,
            Do,
            Of,
            Infix,
            Infixl,
            Infixr,
            Let,
            Foreign,
            Export,
            Qualified,
            Hiding
        }
    }

    public static final class Java {
        public enum Keyword {
            Abstract,
            Assert,
            Boolean,
            Break,
            Byte,
            Case,
            Catch,
            Char,
            Class,
            Const,
            Continue,
            Default,
            Do,
            Double,
            Else,
            Enum,
            Extends,
            Final,
            Finally,
            Float,
            For,
            Goto,
            If,
            Implements,
            Import,
            Instanceof,
            Int,
            Interface,
            Long,
            Native,
            New,
            Package,
            Private,
            Protected,
            Public,
            Record,
            Return,
            Sealed,
            Short,
            Static,
            Strictfp,
            Super,
            Switch,
            Synchronized,
            This,
            Throw,
            Throws,
            Transient,
            Try,
            Void,
            Volatile,
            While,
            Var,
            Null
        }
    }

    public static final class JavaScript {
        public enum Keyword {
            Var,
            Let,
            Const,
            If,
            Else,
            Switch,
            Case,
            Default,
            Function,
            Class,
            Enum,
            Import,
            Export,
            Extends,
            Try,
            Catch,
            Finally,
            Throw,
            New,
            Return,
            This,
            Typeof,
            Instanceof,
            Delete,
            Void,
            While,
            Do,
            For,
            Break,
            Continue,
            Debugger
        }
    }

    public static final class Kotlin {
        public enum Keyword {
            Package,
            Import,
            Class,
            Interface,
            Enum,
            If,
            Else,
            When,
            Try,
            Catch,
            Finally,
            For,
            While,
            Do,
            Break,
            Continue,
            Return,
            As,
            Is,
            Throw,
            In,
            Out,
            Var,
            Val,
            By,
            Super,
            This,
            Data,
            Inline,
            Value,
            Fun,
            Infix
        }
    }

    public static final class Lean {
        public enum Keyword {
            Definition,
            Import,
            Variable,
            In,
            Let,
            From,
            Show,
            Assume,
            By,
            Fun,
            Pi,
            Sigma,
            Type,
            And,
            Or,
            Not,
            Impl,
            Eq,
            Forall,
            Exists,
            Match,
            Where,
            Attributes,
            Instance,
            Private,
            Protected,
            Intro,
            Refl,
            Symm,
            Congr,
            Simp,
            Conv
        }
    }

    public static final class Purescript {
        public enum Keyword {
            Case,
            Class,
            Data,
            Deriving,
            Do,
            Else,
            False,
            For,
            If,
            Import,
            In,
            Instance,
            Let,
            Module,
            Newtype,
            Of,
            Then,
            True,
            Type,
            Where,
            Wildcard
        }
    }

    public static final class Python {
        public enum Keyword {
            And,
            As,
            Assert,
            Break,
            Class,
            Continue,
            Def,
            Del,
            Elif,
            Else,
            Except,
            Finally,
            For,
            From,
            Global,
            If,
            Import,
            In,
            Is,
            Lambda,
            None,
            Nonlocal,
            Not,
            Or,
            Pass,
            Raise,
            Return,
            Try,
            While,
            With,
            Yield
        }
    }

    public static final class Rust {
        public enum Keyword {
            As,
            Async,
            Await,
            Break,
            Const,
            Continue,
            Crate,
            Dyn,
            Else,
            Enum,
            Extern,
            False,
            Fn,
            For,
            If,
            Impl,
            In,
            Let,
            Loop,
            Match,
            Mod,
            Move,
            Mut,
            Pub,
            Return,
            Self,
            Static,
            Struct,
            Super,
            Trait,
            True,
            Type,
            Unsafe,
            Use,
            Where,
            While
        }
    }

    public static final class TypeScript {
        public enum Keyword {
            Abstract,
            Any,
            As,
            Asserts,
            Await,
            Boolean,
            Break,
            Case,
            Catch,
            Class,
            Const,
            Continue,
            Debugger,
            Declare,
            Default,
            Delete,
            Do,
            Else,
            Enum,
            Export,
            Extends,
            False,
            Finally,
            For,
            From,
            Function,
            Get,
            If,
            Implements,
            Import,
            Infer,
            In,
            InstanceOf,
            Interface,
            Is,
            KeyOf,
            Let,
            Module,
            Namespace,
            Never,
            New,
            Null,
            Number,
            Object,
            Of,
            Package,
            Private,
            Protected,
            Public,
            Readonly,
            Require,
            Return,
            Set,
            Static,
            String,
            Super,
            Switch,
            Symbol,
            This,
            Throw,
            True,
            Try,
            Type,
            TypeOf,
            Undefined,
            Unique,
            Unknown,
            Var,
            Void,
            While,
            With,
            Yield
        }
    }

    public static Class<? extends Enum<?>> keywordTypeOf(Language language) {
        return switch (language) {
            case CSharp -> CSharp.Keyword.class;
            case CSS -> null;
            case Golang -> Golang.Keyword.class;
            case Haskell -> Haskell.Keyword.class;
            case HTML -> null;
            case Java -> Java.Keyword.class;
            case JavaScript -> JavaScript.Keyword.class;
            case Kotlin -> Kotlin.Keyword.class;
            case Lean -> Lean.Keyword.class;
            case PureScript -> Purescript.Keyword.class;
            case Python -> Python.Keyword.class;
            case Rust -> Rust.Keyword.class;
            case TypeScript -> TypeScript.Keyword.class;
        };
    }

    private Spec() {}
}

```
<div class="social open-gh-btn my-4">
  <a class="btn btn-github" href="https://github.com/tobiasbriones/blog/tree/main/swe/dev/java/javafx/drawing/productivity/building-slides-from-screenshots-app-in-javafx/slides---ep/src/main/java/engineer/mathsoftware/blog/slides/lang/Spec.java" target="_blank">
    <i class="fab fa-github">
      
    </i>
    <strong>
      Open in GitHub
    </strong>
  </a>
</div>