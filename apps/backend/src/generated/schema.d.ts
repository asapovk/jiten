export type Maybe<T> = T | null;

export interface FetchWordInput {
  searchInput?: Maybe<string>;
}

export interface KanjiSingleInput {
  writing: string;
}

export interface WordSingleInput {
  writing: string;
}

export interface WordCreateInput {
  translation: string[];

  writing: string;

  romaji: string;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  patterns?: Maybe<WordExampleCreateInput[]>;

  antipatterns?: Maybe<WordExampleCreateInput[]>;

  hiragana: string;

  usage?: Maybe<(Maybe<WordUsageCreateInput>)[]>;
}

export interface WordExampleCreateInput {
  original: string;

  translation: string;
}

export interface WordUsageCreateInput {
  question: string;

  answer: string;
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

export interface WordUpdateInput {
  id: string;

  translation: string[];

  writing: string;

  romaji: string;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  patterns?: Maybe<WordExampleUpdateInput[]>;

  antipatterns?: Maybe<WordExampleUpdateInput[]>;

  hiragana: string;

  usage?: Maybe<(Maybe<WordUsageCreateInput>)[]>;
}

export interface WordExampleUpdateInput {
  id: string;

  original?: Maybe<string>;

  translation?: Maybe<string>;
}

export interface WordDeleteInput {
  id: number;
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

  wordSingle: Word;
}

export interface Word {
  id: string;

  translation: string[];

  writing: string;

  synonims?: Maybe<Word[]>;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  kanji?: Maybe<Kanji[]>;

  patterns?: Maybe<WordExample[]>;

  antipatterns?: Maybe<WordExample[]>;

  hiragana?: Maybe<string>;

  usage?: Maybe<(Maybe<WordUsage>)[]>;
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

export interface WordExample {
  id: string;

  original: string;

  translation: string;
}

export interface WordUsage {
  id: string;

  question: string;

  answer: string;
}

export interface Mutation {
  createWord: Word;

  createKanji: Kanji;
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

export interface WordsQueryArgs {
  input?: Maybe<FetchWordInput>;
}
export interface KanjiSingleQueryArgs {
  input: KanjiSingleInput;
}
export interface WordSingleQueryArgs {
  input: WordSingleInput;
}
export interface CreateWordMutationArgs {
  input: WordCreateInput;
}
export interface CreateKanjiMutationArgs {
  input: KanjiCreateInput;
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
