/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    media: Media;
    events: Event;
    nc_member: NcMember;
    nc: Nc;
    partner: Partner;
    patron: Patron;
    sessionElement: SessionElement;
    testimonials: Testimonial;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    nc_member: NcMemberSelect<false> | NcMemberSelect<true>;
    nc: NcSelect<false> | NcSelect<true>;
    partner: PartnerSelect<false> | PartnerSelect<true>;
    patron: PatronSelect<false> | PatronSelect<true>;
    sessionElement: SessionElementSelect<false> | SessionElementSelect<true>;
    testimonials: TestimonialsSelect<false> | TestimonialsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title?: string | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  text?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: number;
  title: string;
  longDescription?: string | null;
  shortDescription: string;
  startDate: string;
  endDate?: string | null;
  url?: string | null;
  logo?: (number | null) | Media;
  cardImage: number | Media;
  actionText?: string | null;
  actionUrl?: string | null;
  active?: boolean | null;
  sessionElements?:
    | {
        sessionElement?: (number | SessionElement)[] | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sessionElement".
 */
export interface SessionElement {
  id: number;
  title: string;
  description: string;
  image: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nc_member".
 */
export interface NcMember {
  id: number;
  fullName: string;
  position: string;
  quote?: string | null;
  image: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nc".
 */
export interface Nc {
  id: number;
  year: number;
  members?:
    | {
        member: (number | NcMember)[];
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partner".
 */
export interface Partner {
  id: number;
  name: string;
  image: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "patron".
 */
export interface Patron {
  id: number;
  qualifier: 'Mr' | 'Mrs' | 'Ms' | 'Dr' | 'Prof';
  fullName: string;
  title: string;
  image: number | Media;
  domain: 'EU' | 'CY';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "testimonials".
 */
export interface Testimonial {
  id: number;
  quote: string;
  authorFullName: string;
  authorDescription: string;
  authorImage: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'events';
        value: number | Event;
      } | null)
    | ({
        relationTo: 'nc_member';
        value: number | NcMember;
      } | null)
    | ({
        relationTo: 'nc';
        value: number | Nc;
      } | null)
    | ({
        relationTo: 'partner';
        value: number | Partner;
      } | null)
    | ({
        relationTo: 'patron';
        value: number | Patron;
      } | null)
    | ({
        relationTo: 'sessionElement';
        value: number | SessionElement;
      } | null)
    | ({
        relationTo: 'testimonials';
        value: number | Testimonial;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  content?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  text?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  title?: T;
  longDescription?: T;
  shortDescription?: T;
  startDate?: T;
  endDate?: T;
  url?: T;
  logo?: T;
  cardImage?: T;
  actionText?: T;
  actionUrl?: T;
  active?: T;
  sessionElements?:
    | T
    | {
        sessionElement?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nc_member_select".
 */
export interface NcMemberSelect<T extends boolean = true> {
  fullName?: T;
  position?: T;
  quote?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nc_select".
 */
export interface NcSelect<T extends boolean = true> {
  year?: T;
  members?:
    | T
    | {
        member?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partner_select".
 */
export interface PartnerSelect<T extends boolean = true> {
  name?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "patron_select".
 */
export interface PatronSelect<T extends boolean = true> {
  qualifier?: T;
  fullName?: T;
  title?: T;
  image?: T;
  domain?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sessionElement_select".
 */
export interface SessionElementSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "testimonials_select".
 */
export interface TestimonialsSelect<T extends boolean = true> {
  quote?: T;
  authorFullName?: T;
  authorDescription?: T;
  authorImage?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}