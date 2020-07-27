// TODO: 半角カナを全角に
// const HALF_KANA_ZEN = "￥。「」、・ヲァィゥェォャュョッーアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜"
// const HALF_KANA = "\¥｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ"

const toHalf = function(s) {
  if (s === null || s === undefined)
    return s
  const ZEN = "０１２３４５６７８９（）／−！＆：　ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"
  const HAN = "0123456789()/-!&: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let s2 = ""
  for (const c of s) {
    const n = ZEN.indexOf(c)
    if (n >= 0) {
      s2 += HAN.charAt(n)
    } else {
      s2 += c
    }
  }
  return s2
}

const toHalfText = parent => {
  if (parent.children.length === 0) {
    parent.textContent = toHalf(parent.textContent);
  } else {
    for (const c of parent.children) {
      toHalfText(c);
    }
  }
}

toHalfText(document.body);
document.title = toHalf(document.title);
