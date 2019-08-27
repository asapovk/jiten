export type Maybe<T> = T | null;

export interface WordUsageWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordUsageWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordUsageWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordUsageWhereInput[]>;

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

  question?: Maybe<string>;
  /** All values that are not equal to given value. */
  question_not?: Maybe<string>;
  /** All values that are contained in given list. */
  question_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  question_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  question_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  question_lte?: Maybe<string>;
  /** All values greater than the given value. */
  question_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  question_gte?: Maybe<string>;
  /** All values containing the given string. */
  question_contains?: Maybe<string>;
  /** All values not containing the given string. */
  question_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  question_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  question_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  question_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  question_not_ends_with?: Maybe<string>;

  answer?: Maybe<string>;
  /** All values that are not equal to given value. */
  answer_not?: Maybe<string>;
  /** All values that are contained in given list. */
  answer_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  answer_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  answer_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  answer_lte?: Maybe<string>;
  /** All values greater than the given value. */
  answer_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  answer_gte?: Maybe<string>;
  /** All values containing the given string. */
  answer_contains?: Maybe<string>;
  /** All values not containing the given string. */
  answer_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  answer_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  answer_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  answer_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  answer_not_ends_with?: Maybe<string>;
}

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

  romaji?: Maybe<string>;
  /** All values that are not equal to given value. */
  romaji_not?: Maybe<string>;
  /** All values that are contained in given list. */
  romaji_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  romaji_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  romaji_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  romaji_lte?: Maybe<string>;
  /** All values greater than the given value. */
  romaji_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  romaji_gte?: Maybe<string>;
  /** All values containing the given string. */
  romaji_contains?: Maybe<string>;
  /** All values not containing the given string. */
  romaji_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  romaji_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  romaji_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  romaji_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  romaji_not_ends_with?: Maybe<string>;

  imageUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<string>;

  videoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  videoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  videoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  videoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  videoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  videoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  videoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  videoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  videoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  videoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  videoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  videoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  videoUrl_not_ends_with?: Maybe<string>;

  hiragana?: Maybe<string>;
  /** All values that are not equal to given value. */
  hiragana_not?: Maybe<string>;
  /** All values that are contained in given list. */
  hiragana_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  hiragana_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  hiragana_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  hiragana_lte?: Maybe<string>;
  /** All values greater than the given value. */
  hiragana_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  hiragana_gte?: Maybe<string>;
  /** All values containing the given string. */
  hiragana_contains?: Maybe<string>;
  /** All values not containing the given string. */
  hiragana_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  hiragana_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  hiragana_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  hiragana_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  hiragana_not_ends_with?: Maybe<string>;

  synonims_every?: Maybe<WordWhereInput>;

  synonims_some?: Maybe<WordWhereInput>;

  synonims_none?: Maybe<WordWhereInput>;

  kanji_every?: Maybe<KanjiWhereInput>;

  kanji_some?: Maybe<KanjiWhereInput>;

  kanji_none?: Maybe<KanjiWhereInput>;

  patterns_every?: Maybe<WordExampleWhereInput>;

  patterns_some?: Maybe<WordExampleWhereInput>;

  patterns_none?: Maybe<WordExampleWhereInput>;

  antipatterns_every?: Maybe<WordExampleWhereInput>;

  antipatterns_some?: Maybe<WordExampleWhereInput>;

  antipatterns_none?: Maybe<WordExampleWhereInput>;

  usage_every?: Maybe<WordUsageWhereInput>;

  usage_some?: Maybe<WordUsageWhereInput>;

  usage_none?: Maybe<WordUsageWhereInput>;
}

export interface KanjiWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<KanjiWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<KanjiWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KanjiWhereInput[]>;

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

  imageUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<string>;

  videoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  videoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  videoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  videoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  videoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  videoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  videoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  videoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  videoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  videoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  videoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  videoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  videoUrl_not_ends_with?: Maybe<string>;

  jlpt?: Maybe<number>;
  /** All values that are not equal to given value. */
  jlpt_not?: Maybe<number>;
  /** All values that are contained in given list. */
  jlpt_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  jlpt_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  jlpt_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  jlpt_lte?: Maybe<number>;
  /** All values greater than the given value. */
  jlpt_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  jlpt_gte?: Maybe<number>;

  strokes?: Maybe<number>;
  /** All values that are not equal to given value. */
  strokes_not?: Maybe<number>;
  /** All values that are contained in given list. */
  strokes_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  strokes_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  strokes_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  strokes_lte?: Maybe<number>;
  /** All values greater than the given value. */
  strokes_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  strokes_gte?: Maybe<number>;

  origin?: Maybe<string>;
  /** All values that are not equal to given value. */
  origin_not?: Maybe<string>;
  /** All values that are contained in given list. */
  origin_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  origin_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  origin_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  origin_lte?: Maybe<string>;
  /** All values greater than the given value. */
  origin_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  origin_gte?: Maybe<string>;
  /** All values containing the given string. */
  origin_contains?: Maybe<string>;
  /** All values not containing the given string. */
  origin_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  origin_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  origin_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  origin_not_ends_with?: Maybe<string>;

  memo?: Maybe<string>;
  /** All values that are not equal to given value. */
  memo_not?: Maybe<string>;
  /** All values that are contained in given list. */
  memo_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  memo_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  memo_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  memo_lte?: Maybe<string>;
  /** All values greater than the given value. */
  memo_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  memo_gte?: Maybe<string>;
  /** All values containing the given string. */
  memo_contains?: Maybe<string>;
  /** All values not containing the given string. */
  memo_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  memo_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  memo_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  memo_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  memo_not_ends_with?: Maybe<string>;

  old_every?: Maybe<KanjiWhereInput>;

  old_some?: Maybe<KanjiWhereInput>;

  old_none?: Maybe<KanjiWhereInput>;

  modern_every?: Maybe<KanjiWhereInput>;

  modern_some?: Maybe<KanjiWhereInput>;

  modern_none?: Maybe<KanjiWhereInput>;

  usageFirst_every?: Maybe<WordWhereInput>;

  usageFirst_some?: Maybe<WordWhereInput>;

  usageFirst_none?: Maybe<WordWhereInput>;

  usageLast_every?: Maybe<WordWhereInput>;

  usageLast_some?: Maybe<WordWhereInput>;

  usageLast_none?: Maybe<WordWhereInput>;

  radicals_every?: Maybe<KanjiWhereInput>;

  radicals_some?: Maybe<KanjiWhereInput>;

  radicals_none?: Maybe<KanjiWhereInput>;

  phonetics_every?: Maybe<KanjiWhereInput>;

  phonetics_some?: Maybe<KanjiWhereInput>;

  phonetics_none?: Maybe<KanjiWhereInput>;
}

export interface WordExampleWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordExampleWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordExampleWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordExampleWhereInput[]>;

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

  original?: Maybe<string>;
  /** All values that are not equal to given value. */
  original_not?: Maybe<string>;
  /** All values that are contained in given list. */
  original_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  original_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  original_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  original_lte?: Maybe<string>;
  /** All values greater than the given value. */
  original_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  original_gte?: Maybe<string>;
  /** All values containing the given string. */
  original_contains?: Maybe<string>;
  /** All values not containing the given string. */
  original_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  original_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  original_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  original_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  original_not_ends_with?: Maybe<string>;

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
}

export interface WordUsageWhereUniqueInput {
  id?: Maybe<string>;
}

export interface WordWhereUniqueInput {
  id?: Maybe<string>;
}

export interface KanjiWhereUniqueInput {
  id?: Maybe<string>;
}

export interface WordExampleWhereUniqueInput {
  id?: Maybe<string>;
}

export interface WordUsageCreateInput {
  id?: Maybe<string>;

  question: string;

  answer: string;
}

export interface WordCreateInput {
  id?: Maybe<string>;

  writing: string;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  hiragana?: Maybe<string>;

  translation?: Maybe<WordCreatetranslationInput>;

  synonims?: Maybe<WordCreateManyInput>;

  kanji?: Maybe<KanjiCreateManyInput>;

  patterns?: Maybe<WordExampleCreateManyInput>;

  antipatterns?: Maybe<WordExampleCreateManyInput>;

  usage?: Maybe<WordUsageCreateManyInput>;
}

export interface WordCreatetranslationInput {
  set?: Maybe<string[]>;
}

export interface WordCreateManyInput {
  create?: Maybe<WordCreateInput[]>;

  connect?: Maybe<WordWhereUniqueInput[]>;
}

export interface KanjiCreateManyInput {
  create?: Maybe<KanjiCreateInput[]>;

  connect?: Maybe<KanjiWhereUniqueInput[]>;
}

export interface KanjiCreateInput {
  id?: Maybe<string>;

  writing: string;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;

  meaning?: Maybe<KanjiCreatemeaningInput>;

  on?: Maybe<KanjiCreateonInput>;

  kun?: Maybe<KanjiCreatekunInput>;

  old?: Maybe<KanjiCreateManyInput>;

  modern?: Maybe<KanjiCreateManyInput>;

  usageFirst?: Maybe<WordCreateManyInput>;

  usageLast?: Maybe<WordCreateManyInput>;

  radicals?: Maybe<KanjiCreateManyInput>;

  phonetics?: Maybe<KanjiCreateManyInput>;
}

export interface KanjiCreatemeaningInput {
  set?: Maybe<string[]>;
}

export interface KanjiCreateonInput {
  set?: Maybe<string[]>;
}

export interface KanjiCreatekunInput {
  set?: Maybe<string[]>;
}

export interface WordExampleCreateManyInput {
  create?: Maybe<WordExampleCreateInput[]>;

  connect?: Maybe<WordExampleWhereUniqueInput[]>;
}

export interface WordExampleCreateInput {
  id?: Maybe<string>;

  original: string;

  translation: string;
}

export interface WordUsageCreateManyInput {
  create?: Maybe<WordUsageCreateInput[]>;

  connect?: Maybe<WordUsageWhereUniqueInput[]>;
}

export interface WordUsageUpdateInput {
  question?: Maybe<string>;

  answer?: Maybe<string>;
}

export interface WordUpdateInput {
  writing?: Maybe<string>;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  hiragana?: Maybe<string>;

  translation?: Maybe<WordUpdatetranslationInput>;

  synonims?: Maybe<WordUpdateManyInput>;

  kanji?: Maybe<KanjiUpdateManyInput>;

  patterns?: Maybe<WordExampleUpdateManyInput>;

  antipatterns?: Maybe<WordExampleUpdateManyInput>;

  usage?: Maybe<WordUsageUpdateManyInput>;
}

export interface WordUpdatetranslationInput {
  set?: Maybe<string[]>;
}

export interface WordUpdateManyInput {
  create?: Maybe<WordCreateInput[]>;

  connect?: Maybe<WordWhereUniqueInput[]>;

  set?: Maybe<WordWhereUniqueInput[]>;

  disconnect?: Maybe<WordWhereUniqueInput[]>;

  delete?: Maybe<WordWhereUniqueInput[]>;

  update?: Maybe<WordUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<WordUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<WordScalarWhereInput[]>;

  upsert?: Maybe<WordUpsertWithWhereUniqueNestedInput[]>;
}

export interface WordUpdateWithWhereUniqueNestedInput {
  where: WordWhereUniqueInput;

  data: WordUpdateDataInput;
}

export interface WordUpdateDataInput {
  writing?: Maybe<string>;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  hiragana?: Maybe<string>;

  translation?: Maybe<WordUpdatetranslationInput>;

  synonims?: Maybe<WordUpdateManyInput>;

  kanji?: Maybe<KanjiUpdateManyInput>;

  patterns?: Maybe<WordExampleUpdateManyInput>;

  antipatterns?: Maybe<WordExampleUpdateManyInput>;

  usage?: Maybe<WordUsageUpdateManyInput>;
}

export interface KanjiUpdateManyInput {
  create?: Maybe<KanjiCreateInput[]>;

  connect?: Maybe<KanjiWhereUniqueInput[]>;

  set?: Maybe<KanjiWhereUniqueInput[]>;

  disconnect?: Maybe<KanjiWhereUniqueInput[]>;

  delete?: Maybe<KanjiWhereUniqueInput[]>;

  update?: Maybe<KanjiUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<KanjiUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<KanjiScalarWhereInput[]>;

  upsert?: Maybe<KanjiUpsertWithWhereUniqueNestedInput[]>;
}

export interface KanjiUpdateWithWhereUniqueNestedInput {
  where: KanjiWhereUniqueInput;

  data: KanjiUpdateDataInput;
}

export interface KanjiUpdateDataInput {
  writing?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;

  meaning?: Maybe<KanjiUpdatemeaningInput>;

  on?: Maybe<KanjiUpdateonInput>;

  kun?: Maybe<KanjiUpdatekunInput>;

  old?: Maybe<KanjiUpdateManyInput>;

  modern?: Maybe<KanjiUpdateManyInput>;

  usageFirst?: Maybe<WordUpdateManyInput>;

  usageLast?: Maybe<WordUpdateManyInput>;

  radicals?: Maybe<KanjiUpdateManyInput>;

  phonetics?: Maybe<KanjiUpdateManyInput>;
}

export interface KanjiUpdatemeaningInput {
  set?: Maybe<string[]>;
}

export interface KanjiUpdateonInput {
  set?: Maybe<string[]>;
}

export interface KanjiUpdatekunInput {
  set?: Maybe<string[]>;
}

export interface KanjiUpdateManyWithWhereNestedInput {
  where: KanjiScalarWhereInput;

  data: KanjiUpdateManyDataInput;
}

export interface KanjiScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<KanjiScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<KanjiScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KanjiScalarWhereInput[]>;

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

  imageUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<string>;

  videoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  videoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  videoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  videoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  videoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  videoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  videoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  videoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  videoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  videoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  videoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  videoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  videoUrl_not_ends_with?: Maybe<string>;

  jlpt?: Maybe<number>;
  /** All values that are not equal to given value. */
  jlpt_not?: Maybe<number>;
  /** All values that are contained in given list. */
  jlpt_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  jlpt_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  jlpt_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  jlpt_lte?: Maybe<number>;
  /** All values greater than the given value. */
  jlpt_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  jlpt_gte?: Maybe<number>;

  strokes?: Maybe<number>;
  /** All values that are not equal to given value. */
  strokes_not?: Maybe<number>;
  /** All values that are contained in given list. */
  strokes_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  strokes_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  strokes_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  strokes_lte?: Maybe<number>;
  /** All values greater than the given value. */
  strokes_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  strokes_gte?: Maybe<number>;

  origin?: Maybe<string>;
  /** All values that are not equal to given value. */
  origin_not?: Maybe<string>;
  /** All values that are contained in given list. */
  origin_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  origin_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  origin_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  origin_lte?: Maybe<string>;
  /** All values greater than the given value. */
  origin_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  origin_gte?: Maybe<string>;
  /** All values containing the given string. */
  origin_contains?: Maybe<string>;
  /** All values not containing the given string. */
  origin_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  origin_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  origin_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  origin_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  origin_not_ends_with?: Maybe<string>;

  memo?: Maybe<string>;
  /** All values that are not equal to given value. */
  memo_not?: Maybe<string>;
  /** All values that are contained in given list. */
  memo_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  memo_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  memo_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  memo_lte?: Maybe<string>;
  /** All values greater than the given value. */
  memo_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  memo_gte?: Maybe<string>;
  /** All values containing the given string. */
  memo_contains?: Maybe<string>;
  /** All values not containing the given string. */
  memo_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  memo_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  memo_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  memo_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  memo_not_ends_with?: Maybe<string>;
}

export interface KanjiUpdateManyDataInput {
  writing?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;

  meaning?: Maybe<KanjiUpdatemeaningInput>;

  on?: Maybe<KanjiUpdateonInput>;

  kun?: Maybe<KanjiUpdatekunInput>;
}

export interface KanjiUpsertWithWhereUniqueNestedInput {
  where: KanjiWhereUniqueInput;

  update: KanjiUpdateDataInput;

  create: KanjiCreateInput;
}

export interface WordExampleUpdateManyInput {
  create?: Maybe<WordExampleCreateInput[]>;

  connect?: Maybe<WordExampleWhereUniqueInput[]>;

  set?: Maybe<WordExampleWhereUniqueInput[]>;

  disconnect?: Maybe<WordExampleWhereUniqueInput[]>;

  delete?: Maybe<WordExampleWhereUniqueInput[]>;

  update?: Maybe<WordExampleUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<WordExampleUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<WordExampleScalarWhereInput[]>;

  upsert?: Maybe<WordExampleUpsertWithWhereUniqueNestedInput[]>;
}

export interface WordExampleUpdateWithWhereUniqueNestedInput {
  where: WordExampleWhereUniqueInput;

  data: WordExampleUpdateDataInput;
}

export interface WordExampleUpdateDataInput {
  original?: Maybe<string>;

  translation?: Maybe<string>;
}

export interface WordExampleUpdateManyWithWhereNestedInput {
  where: WordExampleScalarWhereInput;

  data: WordExampleUpdateManyDataInput;
}

export interface WordExampleScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordExampleScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordExampleScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordExampleScalarWhereInput[]>;

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

  original?: Maybe<string>;
  /** All values that are not equal to given value. */
  original_not?: Maybe<string>;
  /** All values that are contained in given list. */
  original_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  original_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  original_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  original_lte?: Maybe<string>;
  /** All values greater than the given value. */
  original_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  original_gte?: Maybe<string>;
  /** All values containing the given string. */
  original_contains?: Maybe<string>;
  /** All values not containing the given string. */
  original_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  original_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  original_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  original_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  original_not_ends_with?: Maybe<string>;

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
}

export interface WordExampleUpdateManyDataInput {
  original?: Maybe<string>;

  translation?: Maybe<string>;
}

export interface WordExampleUpsertWithWhereUniqueNestedInput {
  where: WordExampleWhereUniqueInput;

  update: WordExampleUpdateDataInput;

  create: WordExampleCreateInput;
}

export interface WordUsageUpdateManyInput {
  create?: Maybe<WordUsageCreateInput[]>;

  connect?: Maybe<WordUsageWhereUniqueInput[]>;

  set?: Maybe<WordUsageWhereUniqueInput[]>;

  disconnect?: Maybe<WordUsageWhereUniqueInput[]>;

  delete?: Maybe<WordUsageWhereUniqueInput[]>;

  update?: Maybe<WordUsageUpdateWithWhereUniqueNestedInput[]>;

  updateMany?: Maybe<WordUsageUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<WordUsageScalarWhereInput[]>;

  upsert?: Maybe<WordUsageUpsertWithWhereUniqueNestedInput[]>;
}

export interface WordUsageUpdateWithWhereUniqueNestedInput {
  where: WordUsageWhereUniqueInput;

  data: WordUsageUpdateDataInput;
}

export interface WordUsageUpdateDataInput {
  question?: Maybe<string>;

  answer?: Maybe<string>;
}

export interface WordUsageUpdateManyWithWhereNestedInput {
  where: WordUsageScalarWhereInput;

  data: WordUsageUpdateManyDataInput;
}

export interface WordUsageScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordUsageScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordUsageScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordUsageScalarWhereInput[]>;

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

  question?: Maybe<string>;
  /** All values that are not equal to given value. */
  question_not?: Maybe<string>;
  /** All values that are contained in given list. */
  question_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  question_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  question_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  question_lte?: Maybe<string>;
  /** All values greater than the given value. */
  question_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  question_gte?: Maybe<string>;
  /** All values containing the given string. */
  question_contains?: Maybe<string>;
  /** All values not containing the given string. */
  question_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  question_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  question_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  question_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  question_not_ends_with?: Maybe<string>;

  answer?: Maybe<string>;
  /** All values that are not equal to given value. */
  answer_not?: Maybe<string>;
  /** All values that are contained in given list. */
  answer_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  answer_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  answer_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  answer_lte?: Maybe<string>;
  /** All values greater than the given value. */
  answer_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  answer_gte?: Maybe<string>;
  /** All values containing the given string. */
  answer_contains?: Maybe<string>;
  /** All values not containing the given string. */
  answer_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  answer_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  answer_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  answer_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  answer_not_ends_with?: Maybe<string>;
}

export interface WordUsageUpdateManyDataInput {
  question?: Maybe<string>;

  answer?: Maybe<string>;
}

export interface WordUsageUpsertWithWhereUniqueNestedInput {
  where: WordUsageWhereUniqueInput;

  update: WordUsageUpdateDataInput;

  create: WordUsageCreateInput;
}

export interface WordUpdateManyWithWhereNestedInput {
  where: WordScalarWhereInput;

  data: WordUpdateManyDataInput;
}

export interface WordScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordScalarWhereInput[]>;

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

  romaji?: Maybe<string>;
  /** All values that are not equal to given value. */
  romaji_not?: Maybe<string>;
  /** All values that are contained in given list. */
  romaji_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  romaji_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  romaji_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  romaji_lte?: Maybe<string>;
  /** All values greater than the given value. */
  romaji_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  romaji_gte?: Maybe<string>;
  /** All values containing the given string. */
  romaji_contains?: Maybe<string>;
  /** All values not containing the given string. */
  romaji_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  romaji_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  romaji_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  romaji_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  romaji_not_ends_with?: Maybe<string>;

  imageUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  imageUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  imageUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  imageUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  imageUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  imageUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  imageUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  imageUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  imageUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  imageUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  imageUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  imageUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  imageUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  imageUrl_not_ends_with?: Maybe<string>;

  videoUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  videoUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  videoUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  videoUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  videoUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  videoUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  videoUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  videoUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  videoUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  videoUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  videoUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  videoUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  videoUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  videoUrl_not_ends_with?: Maybe<string>;

  hiragana?: Maybe<string>;
  /** All values that are not equal to given value. */
  hiragana_not?: Maybe<string>;
  /** All values that are contained in given list. */
  hiragana_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  hiragana_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  hiragana_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  hiragana_lte?: Maybe<string>;
  /** All values greater than the given value. */
  hiragana_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  hiragana_gte?: Maybe<string>;
  /** All values containing the given string. */
  hiragana_contains?: Maybe<string>;
  /** All values not containing the given string. */
  hiragana_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  hiragana_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  hiragana_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  hiragana_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  hiragana_not_ends_with?: Maybe<string>;
}

export interface WordUpdateManyDataInput {
  writing?: Maybe<string>;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  hiragana?: Maybe<string>;

  translation?: Maybe<WordUpdatetranslationInput>;
}

export interface WordUpsertWithWhereUniqueNestedInput {
  where: WordWhereUniqueInput;

  update: WordUpdateDataInput;

  create: WordCreateInput;
}

export interface KanjiUpdateInput {
  writing?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;

  meaning?: Maybe<KanjiUpdatemeaningInput>;

  on?: Maybe<KanjiUpdateonInput>;

  kun?: Maybe<KanjiUpdatekunInput>;

  old?: Maybe<KanjiUpdateManyInput>;

  modern?: Maybe<KanjiUpdateManyInput>;

  usageFirst?: Maybe<WordUpdateManyInput>;

  usageLast?: Maybe<WordUpdateManyInput>;

  radicals?: Maybe<KanjiUpdateManyInput>;

  phonetics?: Maybe<KanjiUpdateManyInput>;
}

export interface WordExampleUpdateInput {
  original?: Maybe<string>;

  translation?: Maybe<string>;
}

export interface WordUsageUpdateManyMutationInput {
  question?: Maybe<string>;

  answer?: Maybe<string>;
}

export interface WordUpdateManyMutationInput {
  writing?: Maybe<string>;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  hiragana?: Maybe<string>;

  translation?: Maybe<WordUpdatetranslationInput>;
}

export interface KanjiUpdateManyMutationInput {
  writing?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;

  meaning?: Maybe<KanjiUpdatemeaningInput>;

  on?: Maybe<KanjiUpdateonInput>;

  kun?: Maybe<KanjiUpdatekunInput>;
}

export interface WordExampleUpdateManyMutationInput {
  original?: Maybe<string>;

  translation?: Maybe<string>;
}

export interface WordUsageSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordUsageSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordUsageSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordUsageSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<WordUsageWhereInput>;
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

export interface KanjiSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<KanjiSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<KanjiSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<KanjiSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<KanjiWhereInput>;
}

export interface WordExampleSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<WordExampleSubscriptionWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<WordExampleSubscriptionWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<WordExampleSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<WordExampleWhereInput>;
}

export type WordUsageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "question_ASC"
  | "question_DESC"
  | "answer_ASC"
  | "answer_DESC";

export type WordOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "writing_ASC"
  | "writing_DESC"
  | "romaji_ASC"
  | "romaji_DESC"
  | "imageUrl_ASC"
  | "imageUrl_DESC"
  | "videoUrl_ASC"
  | "videoUrl_DESC"
  | "hiragana_ASC"
  | "hiragana_DESC";

export type KanjiOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "writing_ASC"
  | "writing_DESC"
  | "imageUrl_ASC"
  | "imageUrl_DESC"
  | "videoUrl_ASC"
  | "videoUrl_DESC"
  | "jlpt_ASC"
  | "jlpt_DESC"
  | "strokes_ASC"
  | "strokes_DESC"
  | "origin_ASC"
  | "origin_DESC"
  | "memo_ASC"
  | "memo_DESC";

export type WordExampleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "original_ASC"
  | "original_DESC"
  | "translation_ASC"
  | "translation_DESC";

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
  wordUsages: (Maybe<WordUsage>)[];

  words: (Maybe<Word>)[];

  kanjis: (Maybe<Kanji>)[];

  wordExamples: (Maybe<WordExample>)[];

  wordUsage?: Maybe<WordUsage>;

  word?: Maybe<Word>;

  kanji?: Maybe<Kanji>;

  wordExample?: Maybe<WordExample>;

  wordUsagesConnection: WordUsageConnection;

  wordsConnection: WordConnection;

  kanjisConnection: KanjiConnection;

  wordExamplesConnection: WordExampleConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
}

export interface WordUsage extends Node {
  id: string;

  question: string;

  answer: string;
}

export interface Word extends Node {
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

  usage?: Maybe<WordUsage[]>;
}

export interface Kanji extends Node {
  id: string;

  writing: string;

  meaning: string[];

  on: string[];

  kun: string[];

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  old?: Maybe<Kanji[]>;

  modern?: Maybe<Kanji[]>;

  memo?: Maybe<string>;

  usageFirst?: Maybe<Word[]>;

  usageLast?: Maybe<Word[]>;

  radicals?: Maybe<Kanji[]>;

  phonetics?: Maybe<Kanji[]>;
}

export interface WordExample extends Node {
  id: string;

  original: string;

  translation: string;
}

/** A connection to a list of items. */
export interface WordUsageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<WordUsageEdge>)[];

  aggregate: AggregateWordUsage;
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
export interface WordUsageEdge {
  /** The item at the end of the edge. */
  node: WordUsage;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateWordUsage {
  count: number;
}

/** A connection to a list of items. */
export interface WordConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<WordEdge>)[];

  aggregate: AggregateWord;
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

/** A connection to a list of items. */
export interface KanjiConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<KanjiEdge>)[];

  aggregate: AggregateKanji;
}

/** An edge in a connection. */
export interface KanjiEdge {
  /** The item at the end of the edge. */
  node: Kanji;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateKanji {
  count: number;
}

/** A connection to a list of items. */
export interface WordExampleConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges: (Maybe<WordExampleEdge>)[];

  aggregate: AggregateWordExample;
}

/** An edge in a connection. */
export interface WordExampleEdge {
  /** The item at the end of the edge. */
  node: WordExample;
  /** A cursor for use in pagination. */
  cursor: string;
}

export interface AggregateWordExample {
  count: number;
}

export interface Mutation {
  createWordUsage: WordUsage;

  createWord: Word;

  createKanji: Kanji;

  createWordExample: WordExample;

  updateWordUsage?: Maybe<WordUsage>;

  updateWord?: Maybe<Word>;

  updateKanji?: Maybe<Kanji>;

  updateWordExample?: Maybe<WordExample>;

  deleteWordUsage?: Maybe<WordUsage>;

  deleteWord?: Maybe<Word>;

  deleteKanji?: Maybe<Kanji>;

  deleteWordExample?: Maybe<WordExample>;

  upsertWordUsage: WordUsage;

  upsertWord: Word;

  upsertKanji: Kanji;

  upsertWordExample: WordExample;

  updateManyWordUsages: BatchPayload;

  updateManyWords: BatchPayload;

  updateManyKanjis: BatchPayload;

  updateManyWordExamples: BatchPayload;

  deleteManyWordUsages: BatchPayload;

  deleteManyWords: BatchPayload;

  deleteManyKanjis: BatchPayload;

  deleteManyWordExamples: BatchPayload;
}

export interface BatchPayload {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Long;
}

export interface Subscription {
  wordUsage?: Maybe<WordUsageSubscriptionPayload>;

  word?: Maybe<WordSubscriptionPayload>;

  kanji?: Maybe<KanjiSubscriptionPayload>;

  wordExample?: Maybe<WordExampleSubscriptionPayload>;
}

export interface WordUsageSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<WordUsage>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<WordUsagePreviousValues>;
}

export interface WordUsagePreviousValues {
  id: string;

  question: string;

  answer: string;
}

export interface WordSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Word>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<WordPreviousValues>;
}

export interface WordPreviousValues {
  id: string;

  translation: string[];

  writing: string;

  romaji?: Maybe<string>;

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  hiragana?: Maybe<string>;
}

export interface KanjiSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<Kanji>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<KanjiPreviousValues>;
}

export interface KanjiPreviousValues {
  id: string;

  writing: string;

  meaning: string[];

  on: string[];

  kun: string[];

  imageUrl?: Maybe<string>;

  videoUrl?: Maybe<string>;

  jlpt?: Maybe<number>;

  strokes?: Maybe<number>;

  origin?: Maybe<string>;

  memo?: Maybe<string>;
}

export interface WordExampleSubscriptionPayload {
  mutation: MutationType;

  node?: Maybe<WordExample>;

  updatedFields?: Maybe<string[]>;

  previousValues?: Maybe<WordExamplePreviousValues>;
}

export interface WordExamplePreviousValues {
  id: string;

  original: string;

  translation: string;
}

// ====================================================
// Arguments
// ====================================================

export interface WordUsagesQueryArgs {
  where?: Maybe<WordUsageWhereInput>;

  orderBy?: Maybe<WordUsageOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface WordsQueryArgs {
  where?: Maybe<WordWhereInput>;

  orderBy?: Maybe<WordOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface KanjisQueryArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface WordExamplesQueryArgs {
  where?: Maybe<WordExampleWhereInput>;

  orderBy?: Maybe<WordExampleOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface WordUsageQueryArgs {
  where: WordUsageWhereUniqueInput;
}
export interface WordQueryArgs {
  where: WordWhereUniqueInput;
}
export interface KanjiQueryArgs {
  where: KanjiWhereUniqueInput;
}
export interface WordExampleQueryArgs {
  where: WordExampleWhereUniqueInput;
}
export interface WordUsagesConnectionQueryArgs {
  where?: Maybe<WordUsageWhereInput>;

  orderBy?: Maybe<WordUsageOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
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
export interface KanjisConnectionQueryArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface WordExamplesConnectionQueryArgs {
  where?: Maybe<WordExampleWhereInput>;

  orderBy?: Maybe<WordExampleOrderByInput>;

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
export interface SynonimsWordArgs {
  where?: Maybe<WordWhereInput>;

  orderBy?: Maybe<WordOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface KanjiWordArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface PatternsWordArgs {
  where?: Maybe<WordExampleWhereInput>;

  orderBy?: Maybe<WordExampleOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface AntipatternsWordArgs {
  where?: Maybe<WordExampleWhereInput>;

  orderBy?: Maybe<WordExampleOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface UsageWordArgs {
  where?: Maybe<WordUsageWhereInput>;

  orderBy?: Maybe<WordUsageOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface OldKanjiArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface ModernKanjiArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface UsageFirstKanjiArgs {
  where?: Maybe<WordWhereInput>;

  orderBy?: Maybe<WordOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface UsageLastKanjiArgs {
  where?: Maybe<WordWhereInput>;

  orderBy?: Maybe<WordOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface RadicalsKanjiArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface PhoneticsKanjiArgs {
  where?: Maybe<KanjiWhereInput>;

  orderBy?: Maybe<KanjiOrderByInput>;

  skip?: Maybe<number>;

  after?: Maybe<string>;

  before?: Maybe<string>;

  first?: Maybe<number>;

  last?: Maybe<number>;
}
export interface CreateWordUsageMutationArgs {
  data: WordUsageCreateInput;
}
export interface CreateWordMutationArgs {
  data: WordCreateInput;
}
export interface CreateKanjiMutationArgs {
  data: KanjiCreateInput;
}
export interface CreateWordExampleMutationArgs {
  data: WordExampleCreateInput;
}
export interface UpdateWordUsageMutationArgs {
  data: WordUsageUpdateInput;

  where: WordUsageWhereUniqueInput;
}
export interface UpdateWordMutationArgs {
  data: WordUpdateInput;

  where: WordWhereUniqueInput;
}
export interface UpdateKanjiMutationArgs {
  data: KanjiUpdateInput;

  where: KanjiWhereUniqueInput;
}
export interface UpdateWordExampleMutationArgs {
  data: WordExampleUpdateInput;

  where: WordExampleWhereUniqueInput;
}
export interface DeleteWordUsageMutationArgs {
  where: WordUsageWhereUniqueInput;
}
export interface DeleteWordMutationArgs {
  where: WordWhereUniqueInput;
}
export interface DeleteKanjiMutationArgs {
  where: KanjiWhereUniqueInput;
}
export interface DeleteWordExampleMutationArgs {
  where: WordExampleWhereUniqueInput;
}
export interface UpsertWordUsageMutationArgs {
  where: WordUsageWhereUniqueInput;

  create: WordUsageCreateInput;

  update: WordUsageUpdateInput;
}
export interface UpsertWordMutationArgs {
  where: WordWhereUniqueInput;

  create: WordCreateInput;

  update: WordUpdateInput;
}
export interface UpsertKanjiMutationArgs {
  where: KanjiWhereUniqueInput;

  create: KanjiCreateInput;

  update: KanjiUpdateInput;
}
export interface UpsertWordExampleMutationArgs {
  where: WordExampleWhereUniqueInput;

  create: WordExampleCreateInput;

  update: WordExampleUpdateInput;
}
export interface UpdateManyWordUsagesMutationArgs {
  data: WordUsageUpdateManyMutationInput;

  where?: Maybe<WordUsageWhereInput>;
}
export interface UpdateManyWordsMutationArgs {
  data: WordUpdateManyMutationInput;

  where?: Maybe<WordWhereInput>;
}
export interface UpdateManyKanjisMutationArgs {
  data: KanjiUpdateManyMutationInput;

  where?: Maybe<KanjiWhereInput>;
}
export interface UpdateManyWordExamplesMutationArgs {
  data: WordExampleUpdateManyMutationInput;

  where?: Maybe<WordExampleWhereInput>;
}
export interface DeleteManyWordUsagesMutationArgs {
  where?: Maybe<WordUsageWhereInput>;
}
export interface DeleteManyWordsMutationArgs {
  where?: Maybe<WordWhereInput>;
}
export interface DeleteManyKanjisMutationArgs {
  where?: Maybe<KanjiWhereInput>;
}
export interface DeleteManyWordExamplesMutationArgs {
  where?: Maybe<WordExampleWhereInput>;
}
export interface WordUsageSubscriptionArgs {
  where?: Maybe<WordUsageSubscriptionWhereInput>;
}
export interface WordSubscriptionArgs {
  where?: Maybe<WordSubscriptionWhereInput>;
}
export interface KanjiSubscriptionArgs {
  where?: Maybe<KanjiSubscriptionWhereInput>;
}
export interface WordExampleSubscriptionArgs {
  where?: Maybe<WordExampleSubscriptionWhereInput>;
}
