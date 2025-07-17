import type { Schema, Struct } from '@strapi/strapi';

export interface AboutCoreValue extends Struct.ComponentSchema {
  collectionName: 'components_about_core_values';
  info: {
    displayName: ' Core Value';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutMission extends Struct.ComponentSchema {
  collectionName: 'components_about_mission_s';
  info: {
    displayName: 'mission ';
    icon: 'heart';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface AboutStatisticCounter extends Struct.ComponentSchema {
  collectionName: 'components_about_statistic_counter_s';
  info: {
    displayName: 'Statistic Counter ';
    icon: 'server';
  };
  attributes: {
    lable: Schema.Attribute.String;
    number: Schema.Attribute.Decimal;
  };
}

export interface AboutVideo extends Struct.ComponentSchema {
  collectionName: 'components_about_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    thunabail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Schema.Attribute.String;
  };
}

export interface AboutVision extends Struct.ComponentSchema {
  collectionName: 'components_about_visions';
  info: {
    displayName: 'vision';
    icon: 'eye';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMission extends Struct.ComponentSchema {
  collectionName: 'components_shared_missions';
  info: {
    displayName: 'mission';
    icon: 'heart';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TeamSocial extends Struct.ComponentSchema {
  collectionName: 'components_team_socials';
  info: {
    displayName: 'social';
    icon: 'globe';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.core-value': AboutCoreValue;
      'about.mission': AboutMission;
      'about.statistic-counter': AboutStatisticCounter;
      'about.video': AboutVideo;
      'about.vision': AboutVision;
      'shared.media': SharedMedia;
      'shared.mission': SharedMission;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'team.social': TeamSocial;
    }
  }
}
