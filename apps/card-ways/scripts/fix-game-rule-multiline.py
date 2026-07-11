#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path

APP = Path(__file__).resolve().parent.parent
GR_DIR = APP / "src" / "i18n" / "gameRuleMessages"

GR_BET_MODES = {
    "en": "The normal mode of this game has a theoretical expected return of {baseRtp}%.\n\nThe player can buy Free Spins at three tiers: {bonusCost3}× (10 spins), {bonusCost4}× (15 spins), or {bonusCost5}× (20 spins) the underlying bet. Each Free Spins buy mode has a theoretical expected return of {bonusRtp}%. Purchasing Free Spins triggers the bonus feature immediately.\n\nThe maximum win in each bet mode is {maxWin}× the underlying bet.",
    "de": "Der Normalmodus hat eine theoretische erwartete Rendite von {baseRtp}%.\n\nDer Spieler kann Freispiele in drei Stufen kaufen: {bonusCost3}× (10 Spins), {bonusCost4}× (15 Spins) oder {bonusCost5}× (20 Spins) des Grundeinsatzes. Jeder Freispiel-Kaufmodus hat eine theoretische Rendite von {bonusRtp}%. Der Kauf löst die Bonus-Funktion sofort aus.\n\nDer maximale Gewinn in jedem Einsatzmodus beträgt {maxWin}× den Grundeinsatz.",
    "es": "El modo normal tiene un retorno teórico esperado del {baseRtp}%.\n\nEl jugador puede comprar Giros Gratis en tres niveles: {bonusCost3}× (10 giros), {bonusCost4}× (15 giros) o {bonusCost5}× (20 giros) la apuesta base. Cada modo de compra tiene un retorno teórico del {bonusRtp}%. La compra activa la función de bono inmediatamente.\n\nEl premio máximo en cada modo de apuesta es {maxWin}× la apuesta base.",
    "fr": "Le mode normal a un retour théorique attendu de {baseRtp}%.\n\nLe joueur peut acheter des Tours Gratuits en trois niveaux : {bonusCost3}× (10 tours), {bonusCost4}× (15 tours) ou {bonusCost5}× (20 tours) la mise de base. Chaque mode d'achat a un retour théorique de {bonusRtp}%. L'achat déclenche immédiatement la fonction bonus.\n\nLe gain maximum dans chaque mode de mise est de {maxWin}× la mise de base.",
    "pt": "O modo normal tem um retorno teórico esperado de {baseRtp}%.\n\nO jogador pode comprar Rodadas Grátis em três níveis: {bonusCost3}× (10 rodadas), {bonusCost4}× (15 rodadas) ou {bonusCost5}× (20 rodadas) a aposta base. Cada modo de compra tem um retorno teórico de {bonusRtp}%. A compra ativa a funcionalidade de bónus imediatamente.\n\nO prémio máximo em cada modo de aposta é {maxWin}× a aposta base.",
    "pl": "Normalny tryb ma teoretyczny oczekiwany zwrot {baseRtp}%.\n\nGracz może kupić Darmowe Spiny na trzech poziomach: {bonusCost3}× (10 spinów), {bonusCost4}× (15 spinów) lub {bonusCost5}× (20 spinów) zakładu podstawowego. Każdy tryb zakupu ma teoretyczny zwrot {bonusRtp}%. Zakup natychmiast uruchamia funkcję bonusową.\n\nMaksymalna wygrana w każdym trybie to {maxWin}× zakład podstawowy.",
    "ru": "Обычный режим имеет теоретическую ожидаемую отдачу {baseRtp}%.\n\nИгрок может купить бесплатные вращения на трёх уровнях: {bonusCost3}× (10 вращений), {bonusCost4}× (15 вращений) или {bonusCost5}× (20 вращений) базовой ставки. Каждый режим покупки имеет теоретическую отдачу {bonusRtp}%. Покупка сразу запускает бонусную функцию.\n\nМаксимальный выигрыш в каждом режиме — {maxWin}× базовой ставки.",
    "ja": "通常モードの理論上の期待還元率は{baseRtp}%です。\n\nプレイヤーは3段階でフリースピンを購入できます：{bonusCost3}×（10回）、{bonusCost4}×（15回）、{bonusCost5}×（20回）のベット。各購入モードの理論還元率は{bonusRtp}%です。購入で即座にボーナス機能が発動します。\n\n各ベットモードの最大当たりはベットの{maxWin}×です。",
    "ko": "일반 모드의 이론적 기대 수익률은 {baseRtp}%입니다.\n\n플레이어는 세 가지 단계로 프리 스핀을 구매할 수 있습니다: {bonusCost3}×(10회), {bonusCost4}×(15회), {bonusCost5}×(20회) 기본 베팅. 각 구매 모드의 이론적 수익률은 {bonusRtp}%입니다. 구매 시 보너스 기능이 즉시 시작됩니다.\n\n각 베팅 모드의 최대 당첨은 기본 베팅의 {maxWin}×입니다.",
    "zh": "正常模式的理论预期回报为{baseRtp}%。\n\n玩家可分三档购买免费旋转：{bonusCost3}×（10次）、{bonusCost4}×（15次）或{bonusCost5}×（20次）基础投注。每档购买模式的理论回报为{bonusRtp}%。购买后立即触发奖励功能。\n\n各投注模式的最大赢赏为{maxWin}×基础投注。",
    "ar": "الوضع العادي له عائد متوقع نظري بنسبة {baseRtp}%.\n\nيمكن للاعب شراء دورات مجانية على ثلاث مستويات: {bonusCost3}× (10 دورات)، {bonusCost4}× (15 دورة)، أو {bonusCost5}× (20 دورة) من الرهان الأساسي. لكل وضع شراء عائد نظري بنسبة {bonusRtp}%. الشراء يفعّل ميزة المكافأة فورًا.\n\nالحد الأقصى للربح في كل وضع رهان هو {maxWin}× الرهان الأساسي.",
    "hi": "सामान्य मोड की सैद्धांतिक अपेक्षित वापसी {baseRtp}% है।\n\nखिलाड़ी तीन स्तरों पर फ्री स्पिन खरीद सकता है: {bonusCost3}× (10 स्पिन), {bonusCost4}× (15 स्पिन), या {bonusCost5}× (20 स्पिन) अंतर्निहित बेट। प्रत्येक खरीद मोड की सैद्धांतिक वापसी {bonusRtp}% है। खरीद तुरंत बोनस फीचर शुरू करती है।\n\nप्रत्येक बेट मोड में अधिकतम जीत {maxWin}× अंतर्निहित बेट है।",
    "id": "Mode normal memiliki pengembalian teoritis yang diharapkan sebesar {baseRtp}%.\n\nPemain dapat membeli Putaran Gratis dalam tiga tingkat: {bonusCost3}× (10 putaran), {bonusCost4}× (15 putaran), atau {bonusCost5}× (20 putaran) taruhan dasar. Setiap mode beli memiliki pengembalian teoritis {bonusRtp}%. Pembelian langsung memicu fitur bonus.\n\nKemenangan maksimum di setiap mode taruhan adalah {maxWin}× taruhan dasar.",
    "tr": "Normal modun teorik beklenen getirisi %{baseRtp}.\n\nOyuncu üç kademede Ücretsiz Döndürme satın alabilir: {bonusCost3}× (10 döndürme), {bonusCost4}× (15 döndürme) veya {bonusCost5}× (20 döndürme) temel bahis. Her satın alma modunun teorik getirisi %{bonusRtp}. Satın alma bonus özelliğini anında tetikler.\n\nHer bahis modunda maksimum kazanç temel bahsin {maxWin}× katıdır.",
    "vi": "Chế độ thường có tỷ lệ hoàn trả lý thuyết kỳ vọng {baseRtp}%.\n\nNgười chơi có thể mua Vòng Quay Miễn Phí ở ba cấp: {bonusCost3}× (10 vòng), {bonusCost4}× (15 vòng) hoặc {bonusCost5}× (20 vòng) cược cơ bản. Mỗi chế độ mua có tỷ lệ hoàn trả lý thuyết {bonusRtp}%. Mua sẽ kích hoạt tính năng bonus ngay lập tức.\n\nThắng tối đa trong mỗi chế độ cược là {maxWin}× cược cơ bản.",
    "fi": "Normaalitilassa teoreettinen odotettu tuotto on {baseRtp}%.\n\nPelaaja voi ostaa ilmaiskierroksia kolmella tasolla: {bonusCost3}× (10 kierrosta), {bonusCost4}× (15 kierrosta) tai {bonusCost5}× (20 kierrosta) peruspanosta. Jokaisen oston teoreettinen tuotto on {bonusRtp}%. Osto käynnistää bonusominaisuuden heti.\n\nMaksimivoitto jokaisessa panostilassa on {maxWin}× peruspanos.",
}

GR_BONUS_BUY_TIER_TEXT = {
    "en": "Cost: {bonusCost}× total bet\nInstantly awards the Free Spins feature ({freeSpins} spins)\nTheoretical RTP: {bonusRtp}%\nMaximum win: {maxWin}× bet\nBonus Buy may be disabled in certain jurisdictions",
    "de": "Kosten: {bonusCost}× Gesamteinsatz\nGewährt sofort die Freispiel-Funktion ({freeSpins} Spins)\nTheoretischer RTP: {bonusRtp}%\nMaximalgewinn: {maxWin}× Einsatz\nBonus-Kauf kann in bestimmten Rechtsgebieten deaktiviert sein",
    "es": "Costo: {bonusCost}× apuesta total\nOtorga instantáneamente la función de Giros Gratis ({freeSpins} giros)\nRTP teórico: {bonusRtp}%\nPremio máximo: {maxWin}× apuesta\nLa Compra de Bono puede estar deshabilitada en ciertas jurisdicciones",
    "fr": "Coût : {bonusCost}× mise totale\nAccorde instantanément la fonction Tours Gratuits ({freeSpins} tours)\nRTP théorique : {bonusRtp}%\nGain maximum : {maxWin}× mise\nL'Achat Bonus peut être désactivé dans certaines juridictions",
    "pt": "Custo: {bonusCost}× aposta total\nConcede instantaneamente a funcionalidade Rodadas Grátis ({freeSpins} rodadas)\nRTP teórico: {bonusRtp}%\nPrémio máximo: {maxWin}× aposta\nA Compra de Bónus pode estar desativada em certas jurisdições",
    "pl": "Koszt: {bonusCost}× całkowity zakład\nNatychmiast przyznaje funkcję Darmowych Spinów ({freeSpins} spinów)\nTeoretyczny RTP: {bonusRtp}%\nMaksymalna wygrana: {maxWin}× zakład\nKup Bonus może być wyłączony w niektórych jurysdykcjach",
    "ru": "Стоимость: {bonusCost}× общей ставки\nМгновенно даёт функцию бесплатных вращений ({freeSpins} вращений)\nТеоретический RTP: {bonusRtp}%\nМаксимальный выигрыш: {maxWin}× ставки\nПокупка бонуса может быть отключена в некоторых юрисдикциях",
    "ja": "費用：総ベットの{bonusCost}×\n即座にフリースピン機能（{freeSpins}回）を獲得\n理論RTP：{bonusRtp}%\n最大当たり：ベットの{maxWin}×\n一部地域ではボーナス購入が無効の場合があります",
    "ko": "비용: 총 베팅의 {bonusCost}×\n즉시 프리 스핀 기능({freeSpins}회) 지급\n이론 RTP: {bonusRtp}%\n최대 당첨: 베팅의 {maxWin}×\n일부 관할 구역에서는 보너스 구매가 비활성화될 수 있음",
    "zh": "费用：总投注的{bonusCost}×\n立即获得免费旋转功能（{freeSpins}次）\n理论RTP：{bonusRtp}%\n最大赢赏：投注的{maxWin}×\n部分司法管辖区可能禁用奖励购买",
    "ar": "التكلفة: {bonusCost}× إجمالي الرهان\nيمنح فورًا ميزة الدورات المجانية ({freeSpins} دورات)\nRTP نظري: {bonusRtp}%\nالحد الأقصى للربح: {maxWin}× الرهان\nقد يُعطّل شراء المكافأة في بعض الولايات القضائية",
    "hi": "लागत: {bonusCost}× कुल बेट\nतुरंत फ्री स्पिन फीचर ({freeSpins} स्पिन) देता है\nसैद्धांतिक RTP: {bonusRtp}%\nअधिकतम जीत: {maxWin}× बेट\nकुछ क्षेत्राधिकारों में बोनस खरीद अक्षम हो सकती है",
    "id": "Biaya: {bonusCost}× total taruhan\nLangsung memberikan fitur Putaran Gratis ({freeSpins} putaran)\nRTP teoritis: {bonusRtp}%\nKemenangan maksimum: {maxWin}× taruhan\nBeli Bonus mungkin dinonaktifkan di yurisdiksi tertentu",
    "tr": "Maliyet: {bonusCost}× toplam bahis\nAnında Ücretsiz Döndürme özelliğini verir ({freeSpins} döndürme)\nTeorik RTP: %{bonusRtp}\nMaksimum kazanç: {maxWin}× bahis\nBonus Satın Al bazı yargı bölgelerinde devre dışı olabilir",
    "vi": "Chi phí: {bonusCost}× tổng cược\nTrao ngay tính năng Vòng Quay Miễn Phí ({freeSpins} vòng quay)\nRTP lý thuyết: {bonusRtp}%\nThắng tối đa: {maxWin}× cược\nMua Bonus có thể bị vô hiệu ở một số khu vực pháp lý",
    "fi": "Hinta: {bonusCost}× kokonaispanos\nAntaa heti ilmaiskierrosominaisuuden ({freeSpins} kierrosta)\nTeoreettinen RTP: {bonusRtp}%\nMaksimivoitto: {maxWin}× panos\nBonuksen osto voi olla pois käytöstä tietyillä alueilla",
}


def ts_string(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
    return f"\t\t'{escaped}'"


def fix_file(path: Path) -> None:
    lang = path.stem
    lines = path.read_text(encoding="utf-8").splitlines()

    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line == "\t'GR.BET_MODES.TEXT':":
            out.append(line)
            out.append(ts_string(GR_BET_MODES[lang]) + ",")
            i += 1
            while i < len(lines) and not lines[i].startswith("\t'GR.SECTION.BONUS_BUY':"):
                i += 1
            continue
        if line == "\t'GR.BONUS_BUY.TIER.TEXT':":
            out.append(line)
            out.append(ts_string(GR_BONUS_BUY_TIER_TEXT[lang]) + ",")
            i += 1
            while i < len(lines) and not lines[i].startswith("\t'GR.SECTION.UI_GUIDE':"):
                i += 1
            continue
        out.append(line)
        i += 1

    path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Fixed {path.relative_to(APP)}")


def main() -> None:
    for path in sorted(GR_DIR.glob("*.ts")):
        if path.name == "index.ts":
            continue
        fix_file(path)


if __name__ == "__main__":
    main()
