"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function HeroText(words: string) {
  return <TextGenerateEffect words={words} />;
}
