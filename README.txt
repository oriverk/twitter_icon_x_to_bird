# README

Twitter (X) のファビコンと画面左上のアイコン画像を任意の画像に変更する拡張機能です。ページ遷移中に表示されるスプラッシュ画面のアイコンは変更できません。

This is a browser extension that changes the Twitter (X) favicon and icon image at the top left of the screen to any image. The splash screen icon displayed during page transitions cannot be changed.

## How to

128px程度の正方形の透過画像を「image.png」という名前でiconsフォルダ（ディレクトリ）に配置してください。もし画像表示が大きく／小さく感じた場合は、`main.css`中の`width: 42px;`を`width: 36px;`や`width: 48px;`の様に修正してください。

Place a square transparent image with a size of about 128px named "image.png" in the icons folder (directory). If you feel that the image display is too big or too small, please change the value of `width: 48px;` in `main.css` to something like `width: 36px;` or `width: 54px;`.

iconsフォルダにない他の戦国IXA画像を利用したい場合は、戦国IXAホームページにあるファンサイトキット画像を利用することが出来ます。

If you want to use other Sengoku IXA images, you can use the fan site kit images on the Sengoku IXA homepage.

- 戦国IXAファンサイトキット / Sengoku IXA fan site kit
  - https://sengokuixa.jp/sitekit/

## Support

only for Chrome and Edge (Chromium) because this uses Chrome Extension APIs

## License

CC0

### for Images

Copyright © 2010-2023 SQUARE ENIX CO., LTD. All Rights Reserved.
