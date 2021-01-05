import { Deserializable } from '@/shared/interfaces/deserialize';

export interface CategoryInput {
  id?: string | null;
  name: string;
}

export class Category implements Deserializable<Category>, CategoryInput {
  name: string = '';
  id?: string|null = null;

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

