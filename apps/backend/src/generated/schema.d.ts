export type Maybe<T> = T | null;

export interface KanjiSingleInput {
  writing: string;
}

export interface WordCreateInput {
  translation: string;

  writing: string;
}

export interface WordUpdateInput {
  wordId: string;

  translation?: Maybe<string>;

  writing?: Maybe<string>;
}

export interface WordDeleteInput {
  wordId: number;
}

export interface KanjiCreateInput {
  writing: string;

  meaning: (Maybe<string>)[];

  on?: Maybe<(Maybe<string>)[]>;

  kun?: Maybe<(Maybe<string>)[]>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;
}

export interface KanjiUpdateInput {
  kanjiId: string;

  writing: string;

  meaning: (Maybe<string>)[];

  on?: Maybe<(Maybe<string>)[]>;

  kun?: Maybe<(Maybe<string>)[]>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;
}

export interface KanjiDeleteInput {
  kanjiId: number;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  words: (Maybe<Word>)[];

  kanjis: (Maybe<Kanji>)[];

  kanjiSingle: Kanji;
}

export interface Word {
  wordId: string;

  translation: string;

  writing: string;

  synonims?: Maybe<(Maybe<Word>)[]>;
}

export interface Kanji {
  kanjiId: string;

  writing: string;

  meaning?: Maybe<(Maybe<string>)[]>;

  on?: Maybe<(Maybe<string>)[]>;

  kun?: Maybe<(Maybe<string>)[]>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  old?: Maybe<(Maybe<Kanji>)[]>;

  modern?: Maybe<(Maybe<Kanji>)[]>;

  memo?: Maybe<string>;

  usageFirst?: Maybe<(Maybe<Word>)[]>;

  usageLast?: Maybe<(Maybe<Word>)[]>;

  radicals?: Maybe<(Maybe<Kanji>)[]>;

  phonetics?: Maybe<(Maybe<Kanji>)[]>;
}

export interface Mutation {
  word: WordMutation;

  kanji: KanjiMutation;
}

export interface WordMutation {
  create: Word;

  update: Word;

  delete: boolean;
}

export interface KanjiMutation {
  create: Kanji;

  update: Kanji;

  delete: boolean;
}

// ====================================================
// Arguments
// ====================================================

export interface KanjiSingleQueryArgs {
  input: KanjiSingleInput;
}
export interface CreateWordMutationArgs {
  input: WordCreateInput;
}
export interface UpdateWordMutationArgs {
  input: WordUpdateInput;
}
export interface DeleteWordMutationArgs {
  input: WordDeleteInput;
}
export interface CreateKanjiMutationArgs {
  input: KanjiCreateInput;
}
export interface UpdateKanjiMutationArgs {
  input: KanjiUpdateInput;
}
export interface DeleteKanjiMutationArgs {
  input: KanjiDeleteInput;
}
