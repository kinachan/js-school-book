
$(document).ready(function () {
  const contentElement = $('#markdownContent');
  const url = contentElement[0].attributes['src'].value;
  $.ajax({
    url,
    success: function (data) {
      const html = marked(data, {
        highlight: function(code, lang = 'js') {
          return hljs.highlightAuto(code, [lang]).value
        },
      }, renderCallBack);
      contentElement.append(html);
    },
    error: function (data) {
      contentElement.append(marked(
        `
<p style="color:red">ファイルの読み込みがきませんでした</p>
`
      ));
    }
  })
})


const renderCallBack = (err, data = '') => {
  return data.addBlankHref().renderTable()
}

/**
 * データを置き換えするメソッドチェーンを定義
 */
String.prototype.renderTable = function () {
  return this.replace(/\<table>/g,
    '<div class="table-responsive"><table>')
    .replace(/<\/table>/g, '</table></div>');
}

/**
 * データを置き換えするメソッドチェーンを定義
 */
String.prototype.addBlankHref = function () {
  return this.replace(/\<a (href=(.*?)\>)({:target=(.*?)})/g,
    '<a target="_blank" $1'
  );
}
