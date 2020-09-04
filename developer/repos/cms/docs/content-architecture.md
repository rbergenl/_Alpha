# Content Architecture

Content-Types:
- Pages (based on Wordpress)
    - The field `template` should have the exact name of the template filename in the website project (e.g. `home_page` for file `templates/home_page.tsx`).
- Products (based on WooCommerce)
- Posts (based on Wordpress)

Components:
- SEO
- Hero
- etc.

> The fields `created_at` and `updated_at` are added to saved content automatically and is not needed to add to the model.
> The model for *Page* is based on [Wordpress API](https://developer.wordpress.org/rest-api/reference/pages/#create-a-page).
> The model for *Product* is based on [Woocommerce API](https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties).
