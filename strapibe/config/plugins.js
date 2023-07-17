module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_FPsN9lFczvy2oQWiy0WOWYSVHD5S/ngZi6e7AEx",
        apiToken: "jCe02GjlCZYfZNpnNhcgugJq",
        appFilter: "appolica-career-path-be",
        teamFilter: "team_CXsv4dnDMBLh8R81SZFoSay8",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
  
    },
  });
  