# Add Fonts
- App:
    - Find a desired font at https://fontflipper.com and download the font files.
    - Place the file(s) inside `android/app/src/main/assets/fonts`.
    - Use the actual font file name in the code `fontFamily: 'Kalam-Bold'`.
- Website:
    - Run `npm install --save gatsby-plugin-prefetch-google-fonts`.
    - Add to `gatsby-config.js`:
    ```javascript
    {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
            fonts: [
                {
                family: `Dosis`
                }
            ]
        }
    }
    ```
    - Add the line `html { font-family: 'Dosis' }` in `components/layout.css`file.
