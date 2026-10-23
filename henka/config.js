// 異常・4M変化点管理表アプリの設定
// syncUrl : このアプリの Apps Script を「ウェブアプリ」としてデプロイしたときの URL (…/exec)
// token   : Code.gs の TOKEN と同じ合言葉
// checkers・quality : 確認者・品質の最初の名前（「＋ 追加」で足した名前は全端末で共通になります）
window.HENKA_CONFIG = {
  syncUrl: "https://script.google.com/macros/s/AKfycbzxUZfrtWONuSpXVh7amKEy3jsLvR5qHpkGW3Ol_wEw4cQh2UqZorTkDxqlYZWwSIPZ3w/exec",
  token: "dsUhfbeyJO6bQSUy",
  procs: ["溶解","注湯","砂処理","造型","セキ","ショット","型"],
  checkers: ["皓輝","平野"],
  quality: ["谷川"]
};
