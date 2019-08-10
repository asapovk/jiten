export type Maybe<T> = T | null;

export interface WordCreateInput {
  id?: Maybe<string>;

  translation: string;

  writing: string;
}

export interface WordUpdateInput {
  translation?: Maybe<string>;

  writing?: Maybe<string>;
}

export interface WordDeleteInput {
  wordId: number;
}

// ====================================================
// Interfaces
// ====================================================

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: string;
}

// ====================================================
// Types
// ====================================================

export interface Query {
  words: Word[];
}

export interface Word extends Node {
  id: string;

  translation: string;

  writing: string;
}

export interface Mutation {
  word: WordMutation;
}

export interface WordMutation {
  create: Word;

  update: Word;

  delete: boolean;
}

// ====================================================
// Arguments
// ====================================================

export interface CreateWordMutationArgs {
  input: WordCreateInput;
}
export interface UpdateWordMutationArgs {
  input: WordUpdateInput;
}
export interface DeleteWordMutationArgs {
  input: WordDeleteInput;
}
