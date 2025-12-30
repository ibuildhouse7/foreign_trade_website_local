import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        about: 'About Us',
        certificates: 'Certificates',
        blog: 'Blog',
        contact: 'Contact Us',
      },
      hero: {
        title: 'SUPERBUILD - Premium Windows & Doors',
        subtitle: 'For Australian Homes',
        description: 'Exceptional quality and craftsmanship in every detail',
        cta: 'Explore Products',
      },
      brand: {
        title: 'Why Choose Us',
        experience: '20+ Years Experience',
        quality: 'Premium Quality',
        service: 'Expert Installation',
        warranty: 'Lifetime Warranty',
      },
      products: {
        title: 'Featured Products',
        viewAll: 'View All Products',
        learnMore: 'Learn More',
      },
      about: {
        title: 'About Our Company',
        description: 'Leading manufacturer of premium windows and doors for the Australian market.',
      },
      certificates: {
        title: 'Our Certifications',
        description: 'Meeting the highest industry standards',
      },
      contact: {
        title: 'Get In Touch',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        message: 'Message',
        submit: 'Send Message',
      },
    },
  },
  cn: {
    translation: {
      nav: {
        home: '首页',
        products: '产品',
        about: '关于我们',
        certificates: '证书认证',
        blog: '博客',
        contact: '联系我们',
      },
      hero: {
        title: 'SUPERBUILD - 高端门窗',
        subtitle: '为澳大利亚住宅打造',
        description: '每一个细节都体现卓越品质与精湛工艺',
        cta: '探索产品',
      },
      brand: {
        title: '为什么选择我们',
        experience: '20+年经验',
        quality: '卓越品质',
        service: '专业安装',
        warranty: '终身保修',
      },
      products: {
        title: '精选产品',
        viewAll: '查看全部产品',
        learnMore: '了解更多',
      },
      about: {
        title: '关于我们公司',
        description: '澳大利亚市场高端门窗的领先制造商。',
      },
      certificates: {
        title: '我们的认证',
        description: '符合最高行业标准',
      },
      contact: {
        title: '联系我们',
        name: '姓名',
        email: '邮箱',
        phone: '电话',
        company: '公司',
        message: '留言',
        submit: '发送消息',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;