

# CSS 代码片段
## Layout

### 代码实现三角形
see [30s of css](https://atomiks.github.io/30-seconds-of-css/#triangle)
```css
.triangle {
  width: 0;
  height: 0;
  border-top: 20px solid #333;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

### 文字缩略显示
see [30s of css](https://atomiks.github.io/30-seconds-of-css/#truncate-text)

```css
.truncate-text {
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

### 文字在第n行缩略显示
- 只支持 WebKit/Blink 内核
- see [css-tricks](https://css-tricks.com/line-clampin/)

```css
.line-clamp {
  width: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
}
```

## Interactivity

### 纯CSS tooltip
see [30s of css](https://atomiks.github.io/30-seconds-of-css/#popout-menu)

```html
<div class="reference">
  <div class="popout-menu">
    Popout menu
  </div>
</div>

```

```css
.reference {
  position: relative;
}
.popout-menu {
  position: absolute;
  visibility: hidden;
  left: 100%;
}
.reference:hover > .popout-menu {
  visibility: visible;
}
```