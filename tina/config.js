import { defineConfig } from "tinacms";
import {
  about_templateFields,
  blog_section_templateFields,
  blog_templateFields,
  config_templateFields,
  hero_templateFields,
  menus_templateFields,
  parameters_templateFields,
  product_section_templateFields,
  product_templateFields,
  resume_templateFields,
  service_templateFields,
  testimonial_templateFields,
} from "./templates";

// Your hosting provider likely exposes this as an environment variable

export default defineConfig({
  branch: "main", // The branch you want to edit content on
  clientId: process.env.TINA_CMS_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_CMS_CLIENT_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets",
      static: false,
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Hero szekció",
        name: "hero",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "hero",
        },
        fields: hero_templateFields(),
      },
      {
        format: "yml",
        label: "Rólunk szekció",
        name: "about",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "aboutSection",
        },
        fields: about_templateFields(),
      },
      {
        format: "yml",
        label: "Termék ismertető szekció",
        name: "services",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "serviceSection",
        },
        fields: service_templateFields(),
      },
      {
        format: "yml",
        label: "Önélatrajz szekció",
        name: "resume",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "resumeSection",
        },
        fields: resume_templateFields(),
      },
      {
        format: "yml",
        label: "Ajánlások szekció",
        name: "testimonials",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "testimonialSection",
        },
        fields: testimonial_templateFields(),
      },
      {
        format: "yml",
        label: "Termék szekció",
        name: "product_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "productSection",
        },
        fields: product_section_templateFields(),
      },
      {
        format: "yml",
        label: "Referenciamunkák szekció",
        name: "blog_section",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "blogSection",
        },
        fields: blog_section_templateFields(),
      },
      {
        format: "md",
        label: "Összes Termék",
        name: "product",
        path: "content/product",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: product_templateFields(),
      },
      {
        format: "md",
        label: "Rendelés (Kapcsolat)",
        name: "contact",
        path: "content/contact",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "md",
        label: "Összes Referenciamunka",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: blog_templateFields(),
      },
      {
        format: "yaml",
        label: "Config Fájl",
        name: "config_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: config_templateFields(),
      },
      {
        format: "yaml",
        label: "Menü Fájl",
        name: "menus_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "menus",
        },
        fields: menus_templateFields(),
      },
      {
        format: "yaml",
        label: "Paraméter Fájl",
        name: "parameters_file",
        path: "config/_default",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "params",
        },
        fields: parameters_templateFields(),
      },
    ],
  },
});
