import { Deserializable } from '@/shared/interfaces/deserialize';

export interface ExperienceInput {
  name_job: string,
  company: string,
  start_at: number | string,
  end_at: number | string,

}

export class Experience implements Deserializable<Experience>, ExperienceInput {
  name_job: string;
  company: string;
  start_at: number | string;
  end_at: number | string;

  constructor() {
    this.deserialize({

    });
  }

  public deserialize(input: Partial<ExperienceInput>): Experience {
    if (!input) {
      return this;
    }
    Object.assign(this, input);
    return this;
  }

  public formExperienceString() {
    const data = {
      name_job: this.name_job,
      company: this.company,
      start_at: this.start_at,
      end_at: this.end_at,
    };

    return data;
  }
}

