---
isArticle: true
title: "Unsere Fahrzeuge"
short: "About"
menuOrder: 1
---
<img src="/fahrzeuge/images/cover.png"/>

This is a book on the functional paradigm in general. We'll use the world's most popular functional programming language: JavaScript. Some may feel this is a poor choice as it's against the grain of the current culture which, at the moment, feels predominately imperative. However, I believe it is the best way to learn FP for several reasons:

 * You likely use it every day at work.

    This makes it possible to practice and apply your acquired knowledge each day on real world programs rather than pet projects on nights and weekends in an esoteric FP language.


 * We don't have to learn everything up front to start writing programs.

    In a pure functional language, you cannot log a variable or read a DOM node without using monads. Here we can cheat a little as we learn to purify our codebase. It's also easier to get started in this language since it's mixed paradigm and you can fall back on your current practices while there are gaps in your knowledge.


 * The language is fully capable of writing top notch functional code.

    We have all the features we need to mimic a language like Scala or Haskell with the help of a tiny library or two. Object-oriented programming currently dominates the industry, but it's clearly awkward in JavaScript. It's akin to camping off of a highway or tap dancing in galoshes. We have to `bind` all over the place lest `this` change out from under us, we don't have classes[^Yet], we have various work arounds for the quirky behavior when the `new` keyword is forgotten, private members are only available via closures. To a lot of us, FP feels more natural anyways.

That said, typed functional languages will, without a doubt, be the best place to code in the style presented by this book. JavaScript will be our means of learning a paradigm, where you apply it is up to you. Luckily, the interfaces are mathematical and, as such, ubiquitous. You'll find yourself at home with swiftz, scalaz, haskell, purescript, and other mathematically inclined environments.

# Table of Contents

## Part 1

* [Chapter 1: What ever are we doing?](/fahrzeuge/ch1)
  * [Introductions](/fahrzeuge/ch1#introductions)
  * [A brief encounter](/fahrzeuge/ch1#a-brief-encounter)
* [Chapter 2: First Class Functions](/fahrzeuge/ch2)
  * [A quick review](/fahrzeuge/ch2#a-quick-review)
  * [Why favor first class?](/fahrzeuge/ch2#why-favor-first-class)
* [Chapter 3: Pure Happiness with Pure Functions](/fahrzeuge/ch3)
  * [Oh to be pure again](/fahrzeuge/ch3#oh-to-be-pure-again)
  * [Side effects may include...](/fahrzeuge/ch3#side-effects-may-include)
  * [8th grade math](/fahrzeuge/ch3#8th-grade-math)
  * [The case for purity](/fahrzeuge/ch3#the-case-for-purity)
  * [In Summary](/fahrzeuge/ch3#in-summary)
* [Chapter 4: Currying](/fahrzeuge/ch4)
  * [Can't live if livin' is without you](/fahrzeuge/ch4#cant-live-if-livin-is-without-you)
  * [More than a pun / Special sauce](/fahrzeuge/ch4#more-than-a-pun--special-sauce)
  * [In Summary](/fahrzeuge/ch4#in-summary)
* [Chapter 5: Coding by Composing](/fahrzeuge/ch5)
  * [Functional Husbandry](/fahrzeuge/ch5#functional-husbandry)
  * [Pointfree](/fahrzeuge/ch5#pointfree)
  * [Debugging](/fahrzeuge/ch5#debugging)
  * [Category Theory](/fahrzeuge/ch5#category-theory)
  * [In Summary](/fahrzeuge/ch5#in-summary)
* [Chapter 6: Example Application](/fahrzeuge/ch6)
  * [Declarative Coding](/fahrzeuge/ch6#declarative-coding)
  * [A flickr of functional programming](/fahrzeuge/ch6#a-flickr-of-functional-programming)
  * [A Principled Refactor](/fahrzeuge/ch6#a-principled-refactor)
  * [In Summary](/fahrzeuge/ch6#in-summary)

## Part 2

* [Chapter 7: Hindley-Milner and Me](/fahrzeuge/ch7)
  * [What's your type?](/fahrzeuge/ch7#whats-your-type)
  * [Tales from the cryptic](/fahrzeuge/ch7#tales-from-cryptic)
  * [Narrowing the possibility](/fahrzeuge/ch7#narrowing-the-possibility)
  * [Free as in theorem](/fahrzeuge/ch7#free-as-in-theorem)
  * [In Summary](/fahrzeuge/ch7#in-summary)
* [Chapter 8: Tupperware](/fahrzeuge/ch8)
  * [The Mighty Container](/fahrzeuge/ch8#the-mighty-container)
  * [My First Functor](/fahrzeuge/ch8#my-first-functor)
  * [Schrödinger’s Maybe](/fahrzeuge/ch8#schrodingers-maybe)
  * [Pure Error Handling](/fahrzeuge/ch8#pure-error-handling)
  * [Old McDonald had Effects…](/fahrzeuge/ch8#old-mcdonald-had-effects)
  * [Asynchronous Tasks](/fahrzeuge/ch8#asynchronous-tasks)
  * [A Spot of Theory](/fahrzeuge/ch8#a-spot-of-theory)
  * [In Summary](/fahrzeuge/ch8#in-summary)
* [Chapter 9: Monadic Onions](/fahrzeuge/ch9)
  * [Pointy Functor Factory](/fahrzeuge/ch9#pointy-functor-factory)
  * [Mixing Metaphors](/fahrzeuge/ch9#mixing-metaphors)
  * [My chain hits my chest](/fahrzeuge/ch9#my-chain-hits-my-chest)
  * [Theory](/fahrzeuge/ch9#theory)
  * [In Summary](/fahrzeuge/ch9#in-summary)


# Plans for the future

* Part 1 is a guide to the basics. I'm updating as I find errors since this is the initial draft. Feel free to help!
* Part 2 will address type classes like functors and monads all the way through to traversable. I hope to squeeze in transformers and a pure application.
* Part 3 will start to dance the fine line between practical programming and academic absurdity. We'll look at comonads, f-algebras, free monads, yoneda, and other categorical constructs.

