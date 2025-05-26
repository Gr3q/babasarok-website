import { TinaField } from "tinacms";

export function about_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "title",
      label: "Cím tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "content",
      label: "Tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "button1Name",
      label: "Első gomb neve",
    },
    {
      type: "string",
      name: "button2Name",
      label: "Második gomb neve",
    },
    {
      type: "string",
      name: "button1Target",
      label: "Első gomb URL",
    },
    {
      type: "string",
      name: "button2Target",
      label: "Második gomb URL",
    },
    {
      type: "image",
      name: "image",
      label: "Kép",
    },
  ];
}
export function blog_section_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "title",
      label: "Cím tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "buttonName",
      label: "Gomb tartalma",
    },
    {
      type: "string",
      name: "buttonTarget",
      label: "Gomb URL",
    },
  ];
}
export function blog_templateFields(): TinaField<false>[] {
  return [
    {
      type: "string",
      name: "title",
      label: "Cím",
    },
    {
      type: "datetime",
      name: "date",
      label: "Dátum",
    },
    {
      type: "image",
      name: "featureImage",
      label: "Kiemelt kép",
    },
    {
      type: "image",
      name: "postImage",
      label: "Bejegyzés kép (lehet ugyanaz, mint a kiemelt)",
    },
    {
      type: "string",
      name: "tags",
      label: "Tagek",
    },
    {
      type: "string",
      name: "categories",
      label: "Kategóriák",
    },
  ];
}
export function config_templateFields(): TinaField<false>[] {
  return [
    {
      type: "string",
      name: "baseURL",
      label: "Oldal URL",
    },
    {
      type: "string",
      name: "languageCode",
      label: "Nyelvi kód",
    },
    {
      type: "string",
      name: "title",
      label: "Cím",
    },
    {
      type: "string",
      name: "theme",
      label: "Vizuális Téma",
    },
    {
      type: "number",
      name: "paginate",
      label: "Oldalankénti bejegyzések száma",
    },
  ];
}
export function hero_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "content",
      label: "Tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "buttonName",
      label: "Gomb tartalma",
    },
    {
      type: "string",
      name: "buttonURL",
      label: "Gomb URL-e",
    },
    {
      type: "image",
      name: "image",
      label: "Kép",
    },
    {
      type: "image",
      name: "videoThumb",
      label: "Videó előnézet",
    },
    {
      type: "string",
      name: "videoURL",
      label: "Videó URL",
    },
  ];
}
export function menus_templateFields(): TinaField<false>[] {
  return [
    {
      type: "object",
      name: "main",
      label: "Főmenü",
      fields: [
        {
          type: "object",
          name: "main",
          label: "Menü",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Név",
            },
            {
              type: "string",
              name: "url",
              label: "url",
            },
            {
              type: "number",
              name: "weight",
              label: "Prioritás (kisebb érték, nagyobb prioritás)",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "sitemap",
      label: "Sitemap",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
        {
          type: "number",
          name: "weight",
          label: "weight",
        },
      ],
    },
  ];
}
export function parameters_templateFields(): TinaField<false>[] {
  return [
    {
      type: "string",
      name: "titleSeparator",
      label: "Title separator",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "boolean",
      name: "alert",
      label: "Alert Enabled",
    },
    {
      type: "boolean",
      name: "alertDismissable",
      label: "Alert dismissable",
    },
    {
      type: "string",
      name: "alertText",
      label: "Alert text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "blogPageURL",
      label: "blogPageURL",
    },
    {
      type: "image",
      name: "logo",
      label: "logo",
    },
    {
      type: "image",
      name: "footerLogo",
      label: "footerLogo",
    },
    {
      type: "string",
      name: "contactLink",
      label: "contactLink",
    },
    {
      type: "string",
      name: "copyright",
      label: "copyright",
    },
    {
      type: "string",
      name: "googleAnalytics",
      label: "googleAnalytics",
    },
    {
      type: "string",
      name: "fabformURL",
      label: "fabformURL",
    },
    {
      type: "object",
      name: "address",
      label: "address",
      fields: [
        {
          type: "string",
          name: "phone",
          label: "phone",
        },
        {
          type: "string",
          name: "email",
          label: "email",
        },
        {
          type: "string",
          name: "address",
          label: "address",
        },
        {
          type: "string",
          name: "openingHours",
          label: "openingHours",
        },
      ],
    },
    {
      type: "object",
      name: "map",
      label: "map",
      fields: [
        {
          type: "string",
          name: "APIkey",
          label: "APIkey",
        },
        {
          type: "string",
          name: "latitude",
          label: "latitude",
        },
        {
          type: "string",
          name: "longitude",
          label: "longitude",
        },
        {
          type: "image",
          name: "pinImage",
          label: "pinImage",
        },
      ],
    },
    {
      type: "object",
      name: "social",
      label: "Social",
      fields: [
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "number",
          name: "weight",
          label: "Weight",
        },
      ],
    },
  ];
}
export function product_section_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "title",
      label: "Cím tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "buttonName",
      label: "Gomb tartalma",
    },
    {
      type: "string",
      name: "buttonTarget",
      label: "Gomb URL",
    },
    {
      type: "number",
      name: "itemCount",
      label: "Termékek száma",
    },
  ];
}
export function product_templateFields(): TinaField<false>[] {
  return [
    {
      type: "string",
      name: "title",
      label: "Név",
    },
        {
      type: "string",
      name: "categories",
      label: "Alcím",
    },
    {
      type: "datetime",
      name: "date",
      label: "Dátum",
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Kép",
    },
    {
      type: "object",
      name: "table",
      label: "Ár",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Ár címe",
        },
        {
          type: "string",
          name: "description",
          label: "Ár",
        },
      ],
    },
    {
      type: "string",
      name: "shortDescription",
      label: "Leírás",
      ui: {
        component: "textarea",
      },
    },
  ];
}
export function resume_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "title",
      label: "Cím tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "tab1Name",
      label: "Tab 1 neve",
    },
    {
      type: "string",
      name: "tab2Name",
      label: "Tab 2 neve",
    },
    {
      type: "string",
      name: "tab1Target",
      label: "Tab 1 URL",
    },
    {
      type: "string",
      name: "tab2Target",
      label: "Tab 2 URL",
    },
    {
      type: "object",
      name: "education",
      label: "education",
      list: true,
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
    {
      type: "object",
      name: "experience",
      label: "experience",
      list: true,
      fields: [
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
  ];
}
export function service_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "title",
      label: "Cím tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "service",
      label: "Termék ismertető",
      list: true,
      fields: [
        {
          type: "string",
          name: "content",
          label: "Tartalom",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Ikon",
        },
      ],
    },
  ];
}
export function testimonial_templateFields(): TinaField<false>[] {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Bekapcsolva",
    },
    {
      type: "string",
      name: "topTitle",
      label: "Cím",
    },
    {
      type: "string",
      name: "title",
      label: "Cím tartalom",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "testimonial",
      label: "Vélemény",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Név",
        },
        {
          type: "string",
          name: "comment",
          label: "Vélemény",
        },
        {
          type: "string",
          name: "time",
          label: "Időpont",
        },
        {
          type: "number",
          name: "star",
          label: "Csillagok száma",
        },
      ],
    },
  ];
}
