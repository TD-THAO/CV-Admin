import Vue from 'vue';
import VueI18n from 'vue-i18n';
import vi from 'vee-validate/dist/locale/vi.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'vi',
  messages: {
    vi: {
      fields: {
        email: 'Email',
        password: 'Mật khẩu',
        password_confirmation: 'Xác nhận mật khẩu',
        user_name: 'Họ tên',
        phone: 'Số điện thoại',
        address: 'Địa chỉ',
      },

      validation: {
        ...vi.messages,
        required: 'Vui lòng nhập {_field_}',
      },
    },
  },
});

export { i18n };
