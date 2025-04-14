# Table.One Widget Loader

This project contains a lightweight TypeScript loader script for embedding the [Table.One widget](https://github.com/itsdimitrie/table.one-widget-test) into any website.

The loader dynamically injects the actual widget script via a simple `<script>` tag, making it easy to add reservation functionality anywhere.

---

## 🔧 Usage

To embed the widget on your website:

```html
<script src="https://itsdimitrie.github.io/widget-loader/embed.js"></script>
<div
  class="widget-data"
  restoId="123"
  restoName="Dimi's Pizza"
  color="#ffaa00"
></div>
```
