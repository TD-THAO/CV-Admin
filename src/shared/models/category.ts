import { Deserializable } from '@/shared/interfaces/deserialize';

export interface CategoryInput {
  id?: string;
  name: string;
  count_product: number;
  percent: number;

}

export class Category implements Deserializable<Category>, CategoryInput {
  name: string = '';
  id?: string = '';
  count_product: number = 0;
  percent: number = 0;

  constructor() {
    this.deserialize({

    });
  }

  deserialize(input: Partial<CategoryInput>): Category {
    if (!input) {
      return this;
    }
    Object.assign(this, input);
    return this;
  }

  formJSONData() {
    return {
      name: this.name || '',
    };
  }
}

