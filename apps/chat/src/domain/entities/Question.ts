interface QuestionProps {
  question: string;
  completion: string;
  accountId: string;
}

export class Question {
  question: string;
  completion: string;
  accountId: string;

  private constructor(questionProps: QuestionProps) {
    this.question = questionProps.question;
    this.completion = questionProps.completion;
    this.accountId = questionProps.accountId;
  }
  public static create(questionProps: QuestionProps): Question {
    return new Question(questionProps);
  }
}
