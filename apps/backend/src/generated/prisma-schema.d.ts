export type Maybe<T> = T | null;

export interface WordWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  translation?: Maybe<string>;
  /** All values that are not equal to given value. */
  translation_not?: Maybe<string>;
  /** All values that are contained in given list. */
  translation_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  translation_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  translation_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  translation_lte?: Maybe<string>;
  /** All values greater than the given value. */
  translation_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  translation_gte?: Maybe<string>;
  /** All values containing the given string. */
  translation_contains?: Maybe<string>;
  /** All values not containing the given string. */
  translation_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  translation_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  translation_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  translation_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  translation_not_ends_with?: Maybe<string>;

  writing?: Maybe<string>;
  /** All values that are not equal to given value. */
  writing_not?: Maybe<string>;
  /** All values that are contained in given list. */
  writing_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  writing_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  writing_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  writing_lte?: Maybe<string>;
  /** All values greater than the given value. */
  writing_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  writing_gte?: Maybe<string>;
  /** All values containing the given string. */
  writing_contains?: Maybe<string>;
  /** All values not containing the given string. */
  writing_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  writing_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  writing_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  writing_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  writing_not_ends_with?: Maybe<string>;
}

export interface WordWhereUniqueInput {
  id?: Maybe<string>;
}

export interface WordCreateInput {
  id?: Maybe<string>;

  translation: string;

  writing: string;
}

export interface WordUpdateInput {
  translation?: Maybe<string>;

  writing?: Maybe<string>;
}

export interface WordUpdateManyMutationInput {
  translation?: Maybe<string>;

  writing?: Maybe<string>;
}

export interface WordSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<WordWhereInput>;
}

export type WordOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "translation_ASC"
  | "translation_DESC"
  | "writing_ASC"
  | "writing_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

// ====================================================
// Scalars
// ====================================================

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
  words: (Maybe<Word>)[];

  word?: Maybe<Word>;

  wordsConnection: WordConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
}

export interface Word extends Node {
  id: string;

  translation: string;

  writing: string;
}

/** A connection to a list of items. */
export interface WordConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<WordEdge>)[];

  aggregate: AggregateWord;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: boolean;
  /** When paginating backwards, are there more items? */
  hasPreviousPage: boolean;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<string>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<string>;
}

/** An edge in a connection. */
export interface WordEdge {
  /** The item at the end of the edge. */
  node: Word;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateWord {
  count: number;
}

export interface Mutation {
  createWord: Word;

  updateWord?: Maybe<Word>;

  deleteWord?: Maybe<Word>;

  upsertWord: Word;

  updateManyWords: BatchPayload;

  deleteManyWords: BatchPayload;
}

export interface BatchPayload {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Long;
}

export interface Subscription {
  word?: Maybe<WordSubscriptionPayload>;
}

export interface WordSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Word>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<WordPreviousValues>;
}

export interface WordPreviousValues {
  id: string;

  translation: string;

  writing: string;
}

// ====================================================
// Arguments
// ====================================================

export interface WordsQueryArgs {
  where?: Maybe<WordWhereInput>;

  orderBy?: Maybe<WordOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface WordQueryArgs {
  where: WordWhereUniqueInput;
}
export interface WordsConnectionQueryArgs {
  where?: Maybe<WordWhereInput>;

  orderBy?: Maybe<WordOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface NodeQueryArgs {
  /** The ID of an object */
  id: string;
}
export interface CreateWordMutationArgs {
  data: WordCreateInput;
}
export interface UpdateWordMutationArgs {
  data: WordUpdateInput;

  where: WordWhereUniqueInput;
}
export interface DeleteWordMutationArgs {
  where: WordWhereUniqueInput;
}
export interface UpsertWordMutationArgs {
  where: WordWhereUniqueInput;

  create: WordCreateInput;

  update: WordUpdateInput;
}
export interface UpdateManyWordsMutationArgs {
  data: WordUpdateManyMutationInput;

  where?: Maybe<WordWhereInput>;
}
export interface DeleteManyWordsMutationArgs {
  where?: Maybe<WordWhereInput>;
}
export interface WordSubscriptionArgs {
  where?: Maybe<WordSubscriptionWhereInput>;
}
