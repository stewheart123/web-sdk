#!/usr/bin/env python3
"""Replace repeated tier game-rule blocks with a single consolidated bonus-buy section."""

from __future__ import annotations

from pathlib import Path

APP = Path(__file__).resolve().parent.parent
GR_DIR = APP / "src" / "i18n" / "gameRuleMessages"

GR_BET_MODES = {
    "en": "NORMAL MODE: Standard base-game spins at {baseCost}× your selected bet.\n\nThe normal mode of this game has a theoretical expected return of {baseRtp}%.\n\nThe player can buy Free Spins at three tiers:\n• 3 Scatters / {freeSpins3} spins — {bonusCost3}× bet — RTP {bonusRtp3}%\n• 4 Scatters / {freeSpins4} spins — {bonusCost4}× bet — RTP {bonusRtp4}%\n• 5 Scatters / {freeSpins5} spins — {bonusCost5}× bet — RTP {bonusRtp5}%\n\nPurchasing Free Spins triggers the bonus feature immediately.\n\nThe maximum win in each bet mode is {maxWin}× the underlying bet.",
    "de": "Der Normalmodus hat eine theoretische erwartete Rendite von {baseRtp}%.\n\nDer Spieler kann Freispiele in drei Stufen kaufen:\n• 3 Scatter / {freeSpins3} Spins — {bonusCost3}× Einsatz — RTP {bonusRtp3}%\n• 4 Scatter / {freeSpins4} Spins — {bonusCost4}× Einsatz — RTP {bonusRtp4}%\n• 5 Scatter / {freeSpins5} Spins — {bonusCost5}× Einsatz — RTP {bonusRtp5}%\n\nDer Kauf löst die Bonus-Funktion sofort aus.\n\nDer maximale Gewinn in jedem Einsatzmodus beträgt {maxWin}× den Grundeinsatz.",
    "es": "El modo normal tiene un retorno teórico esperado del {baseRtp}%.\n\nEl jugador puede comprar Giros Gratis en tres niveles:\n• 3 Scatters / {freeSpins3} giros — {bonusCost3}× apuesta — RTP {bonusRtp3}%\n• 4 Scatters / {freeSpins4} giros — {bonusCost4}× apuesta — RTP {bonusRtp4}%\n• 5 Scatters / {freeSpins5} giros — {bonusCost5}× apuesta — RTP {bonusRtp5}%\n\nLa compra activa la función de bono inmediatamente.\n\nEl premio máximo en cada modo de apuesta es {maxWin}× la apuesta base.",
    "fr": "Le mode normal a un retour théorique attendu de {baseRtp}%.\n\nLe joueur peut acheter des Tours Gratuits en trois niveaux :\n• 3 Scatters / {freeSpins3} tours — {bonusCost3}× mise — RTP {bonusRtp3}%\n• 4 Scatters / {freeSpins4} tours — {bonusCost4}× mise — RTP {bonusRtp4}%\n• 5 Scatters / {freeSpins5} tours — {bonusCost5}× mise — RTP {bonusRtp5}%\n\nL'achat déclenche immédiatement la fonction bonus.\n\nLe gain maximum dans chaque mode de mise est de {maxWin}× la mise de base.",
    "pt": "O modo normal tem um retorno teórico esperado de {baseRtp}%.\n\nO jogador pode comprar Rodadas Grátis em três níveis:\n• 3 Scatters / {freeSpins3} rodadas — {bonusCost3}× aposta — RTP {bonusRtp3}%\n• 4 Scatters / {freeSpins4} rodadas — {bonusCost4}× aposta — RTP {bonusRtp4}%\n• 5 Scatters / {freeSpins5} rodadas — {bonusCost5}× aposta — RTP {bonusRtp5}%\n\nA compra ativa a funcionalidade de bónus imediatamente.\n\nO prémio máximo em cada modo de aposta é {maxWin}× a aposta base.",
    "pl": "Normalny tryb ma teoretyczny oczekiwany zwrot {baseRtp}%.\n\nGracz może kupić Darmowe Spiny na trzech poziomach:\n• 3 Scattery / {freeSpins3} spinów — {bonusCost3}× zakład — RTP {bonusRtp3}%\n• 4 Scattery / {freeSpins4} spinów — {bonusCost4}× zakład — RTP {bonusRtp4}%\n• 5 Scatterów / {freeSpins5} spinów — {bonusCost5}× zakład — RTP {bonusRtp5}%\n\nZakup natychmiast uruchamia funkcję bonusową.\n\nMaksymalna wygrana w każdym trybie to {maxWin}× zakład podstawowy.",
    "ru": "Обычный режим имеет теоретическую ожидаемую отдачу {baseRtp}%.\n\nИгрок может купить бесплатные вращения на трёх уровнях:\n• 3 скаттера / {freeSpins3} вращений — {bonusCost3}× ставка — RTP {bonusRtp3}%\n• 4 скаттера / {freeSpins4} вращений — {bonusCost4}× ставка — RTP {bonusRtp4}%\n• 5 скаттеров / {freeSpins5} вращений — {bonusCost5}× ставка — RTP {bonusRtp5}%\n\nПокупка сразу запускает бонусную функцию.\n\nМаксимальный выигрыш в каждом режиме — {maxWin}× базовой ставки.",
    "ja": "通常モードの理論上の期待還元率は{baseRtp}%です。\n\nプレイヤーは3段階でフリースピンを購入できます：\n• 3スキャッター / {freeSpins3}回 — {bonusCost3}×ベット — RTP {bonusRtp3}%\n• 4スキャッター / {freeSpins4}回 — {bonusCost4}×ベット — RTP {bonusRtp4}%\n• 5スキャッター / {freeSpins5}回 — {bonusCost5}×ベット — RTP {bonusRtp5}%\n\n購入で即座にボーナス機能が発動します。\n\n各ベットモードの最大当たりはベットの{maxWin}×です。",
    "ko": "일반 모드의 이론적 기대 수익률은 {baseRtp}%입니다.\n\n플레이어는 세 가지 단계로 프리 스핀을 구매할 수 있습니다:\n• 3 스캐터 / {freeSpins3}회 — {bonusCost3}× 베팅 — RTP {bonusRtp3}%\n• 4 스캐터 / {freeSpins4}회 — {bonusCost4}× 베팅 — RTP {bonusRtp4}%\n• 5 스캐터 / {freeSpins5}회 — {bonusCost5}× 베팅 — RTP {bonusRtp5}%\n\n구매 시 보너스 기능이 즉시 시작됩니다.\n\n각 베팅 모드의 최대 당첨은 기본 베팅의 {maxWin}×입니다.",
    "zh": "正常模式的理论预期回报为{baseRtp}%。\n\n玩家可分三档购买免费旋转：\n• 3个Scatter / {freeSpins3}次 — {bonusCost3}×投注 — RTP {bonusRtp3}%\n• 4个Scatter / {freeSpins4}次 — {bonusCost4}×投注 — RTP {bonusRtp4}%\n• 5个Scatter / {freeSpins5}次 — {bonusCost5}×投注 — RTP {bonusRtp5}%\n\n购买后立即触发奖励功能。\n\n各投注模式的最大赢赏为{maxWin}×基础投注。",
    "ar": "الوضع العادي له عائد متوقع نظري بنسبة {baseRtp}%.\n\nيمكن للاعب شراء دورات مجانية على ثلاث مستويات:\n• 3 scatters / {freeSpins3} دورات — {bonusCost3}× رهان — RTP {bonusRtp3}%\n• 4 scatters / {freeSpins4} دورات — {bonusCost4}× رهان — RTP {bonusRtp4}%\n• 5 scatters / {freeSpins5} دورات — {bonusCost5}× رهان — RTP {bonusRtp5}%\n\nالشراء يفعّل ميزة المكافأة فورًا.\n\nالحد الأقصى للربح في كل وضع رهان هو {maxWin}× الرهان الأساسي.",
    "hi": "सामान्य मोड की सैद्धांतिक अपेक्षित वापसी {baseRtp}% है।\n\nखिलाड़ी तीन स्तरों पर फ्री स्पिन खरीद सकता है:\n• 3 स्कैटर / {freeSpins3} स्पिन — {bonusCost3}× बेट — RTP {bonusRtp3}%\n• 4 स्कैटर / {freeSpins4} स्पिन — {bonusCost4}× बेट — RTP {bonusRtp4}%\n• 5 स्कैटर / {freeSpins5} स्पिन — {bonusCost5}× बेट — RTP {bonusRtp5}%\n\nखरीद तुरंत बोनस फीचर शुरू करती है।\n\nप्रत्येक बेट मोड में अधिकतम जीत {maxWin}× अंतर्निहित बेट है।",
    "id": "Mode normal memiliki pengembalian teoritis yang diharapkan sebesar {baseRtp}%.\n\nPemain dapat membeli Putaran Gratis dalam tiga tingkat:\n• 3 Scatter / {freeSpins3} putaran — {bonusCost3}× taruhan — RTP {bonusRtp3}%\n• 4 Scatter / {freeSpins4} putaran — {bonusCost4}× taruhan — RTP {bonusRtp4}%\n• 5 Scatter / {freeSpins5} putaran — {bonusCost5}× taruhan — RTP {bonusRtp5}%\n\nPembelian langsung memicu fitur bonus.\n\nKemenangan maksimum di setiap mode taruhan adalah {maxWin}× taruhan dasar.",
    "tr": "Normal modun teorik beklenen getirisi %{baseRtp}.\n\nOyuncu üç kademede Ücretsiz Döndürme satın alabilir:\n• 3 Scatter / {freeSpins3} döndürme — {bonusCost3}× bahis — RTP %{bonusRtp3}\n• 4 Scatter / {freeSpins4} döndürme — {bonusCost4}× bahis — RTP %{bonusRtp4}\n• 5 Scatter / {freeSpins5} döndürme — {bonusCost5}× bahis — RTP %{bonusRtp5}\n\nSatın alma bonus özelliğini anında tetikler.\n\nHer bahis modunda maksimum kazanç temel bahsin {maxWin}× katıdır.",
    "vi": "Chế độ thường có tỷ lệ hoàn trả lý thuyết kỳ vọng {baseRtp}%.\n\nNgười chơi có thể mua Vòng Quay Miễn Phí ở ba cấp:\n• 3 Scatter / {freeSpins3} vòng — {bonusCost3}× cược — RTP {bonusRtp3}%\n• 4 Scatter / {freeSpins4} vòng — {bonusCost4}× cược — RTP {bonusRtp4}%\n• 5 Scatter / {freeSpins5} vòng — {bonusCost5}× cược — RTP {bonusRtp5}%\n\nMua sẽ kích hoạt tính năng bonus ngay lập tức.\n\nThắng tối đa trong mỗi chế độ cược là {maxWin}× cược cơ bản.",
    "fi": "Normaalitilassa teoreettinen odotettu tuotto on {baseRtp}%.\n\nPelaaja voi ostaa ilmaiskierroksia kolmella tasolla:\n• 3 scatteria / {freeSpins3} kierrosta — {bonusCost3}× panos — RTP {bonusRtp3}%\n• 4 scatteria / {freeSpins4} kierrosta — {bonusCost4}× panos — RTP {bonusRtp4}%\n• 5 scatteria / {freeSpins5} kierrosta — {bonusCost5}× panos — RTP {bonusRtp5}%\n\nOsto käynnistää bonusominaisuuden heti.\n\nMaksimivoitto jokaisessa panostilassa on {maxWin}× peruspanos.",
}

GR_BONUS_BUY_TITLE = {
    "en": "BONUS BUY — FREE SPINS",
    "de": "BONUS KAUFEN — FREISPIELE",
    "es": "COMPRA DE BONO — GIROS GRATIS",
    "fr": "ACHAT BONUS — TOURS GRATUITS",
    "pt": "COMPRAR BÓNUS — RODADAS GRÁTIS",
    "pl": "KUP BONUS — DARMOWE SPINY",
    "ru": "ПОКУПКА БОНУСА — БЕСПЛАТНЫЕ ВРАЩЕНИЯ",
    "ja": "ボーナス購入 — フリースピン",
    "ko": "보너스 구매 — 프리 스핀",
    "zh": "奖励购买 — 免费旋转",
    "ar": "شراء المكافأة — دورات مجانية",
    "hi": "बोनस खरीदें — फ्री स्पिन",
    "id": "BELI BONUS — PUTARAN GRATIS",
    "tr": "BONUS SATIN AL — ÜCRETSİZ DÖNDÜRME",
    "vi": "MUA BONUS — VÒNG QUAY MIỄN PHÍ",
    "fi": "OSTA BONUS — ILMAISKIERROKSET",
}

GR_BONUS_BUY_TEXT = {
    "en": "Instantly awards the Free Spins feature at one of three tiers:\n\n• 3 Scatters ({freeSpins3} spins): {bonusCost3}× total bet\n• 4 Scatters ({freeSpins4} spins): {bonusCost4}× total bet\n• 5 Scatters ({freeSpins5} spins): {bonusCost5}× total bet\n\nMaximum win: {maxWin}× bet\nBonus Buy may be disabled in certain jurisdictions",
    "de": "Gewährt sofort die Freispiel-Funktion in einer von drei Stufen:\n\n3 Scatter ({freeSpins3} Spins): {bonusCost3}× Gesamteinsatz — RTP {bonusRtp3}%\n4 Scatter ({freeSpins4} Spins): {bonusCost4}× Gesamteinsatz — RTP {bonusRtp4}%\n5 Scatter ({freeSpins5} Spins): {bonusCost5}× Gesamteinsatz — RTP {bonusRtp5}%\n\nMaximalgewinn: {maxWin}× Einsatz\nBonus-Kauf kann in bestimmten Rechtsgebieten deaktiviert sein",
    "es": "Otorga instantáneamente la función de Giros Gratis en uno de tres niveles:\n\n3 Scatters ({freeSpins3} giros): {bonusCost3}× apuesta total — RTP {bonusRtp3}%\n4 Scatters ({freeSpins4} giros): {bonusCost4}× apuesta total — RTP {bonusRtp4}%\n5 Scatters ({freeSpins5} giros): {bonusCost5}× apuesta total — RTP {bonusRtp5}%\n\nPremio máximo: {maxWin}× apuesta\nLa Compra de Bono puede estar deshabilitada en ciertas jurisdicciones",
    "fr": "Accorde instantanément la fonction Tours Gratuits à l'un des trois niveaux :\n\n3 Scatters ({freeSpins3} tours) : {bonusCost3}× mise totale — RTP {bonusRtp3}%\n4 Scatters ({freeSpins4} tours) : {bonusCost4}× mise totale — RTP {bonusRtp4}%\n5 Scatters ({freeSpins5} tours) : {bonusCost5}× mise totale — RTP {bonusRtp5}%\n\nGain maximum : {maxWin}× mise\nL'Achat Bonus peut être désactivé dans certaines juridictions",
    "pt": "Concede instantaneamente a funcionalidade Rodadas Grátis num de três níveis:\n\n3 Scatters ({freeSpins3} rodadas): {bonusCost3}× aposta total — RTP {bonusRtp3}%\n4 Scatters ({freeSpins4} rodadas): {bonusCost4}× aposta total — RTP {bonusRtp4}%\n5 Scatters ({freeSpins5} rodadas): {bonusCost5}× aposta total — RTP {bonusRtp5}%\n\nPrémio máximo: {maxWin}× aposta\nA Compra de Bónus pode estar desativada em certas jurisdições",
    "pl": "Natychmiast przyznaje funkcję Darmowych Spinów na jednym z trzech poziomów:\n\n3 Scattery ({freeSpins3} spinów): {bonusCost3}× całkowity zakład — RTP {bonusRtp3}%\n4 Scattery ({freeSpins4} spinów): {bonusCost4}× całkowity zakład — RTP {bonusRtp4}%\n5 Scatterów ({freeSpins5} spinów): {bonusCost5}× całkowity zakład — RTP {bonusRtp5}%\n\nMaksymalna wygrana: {maxWin}× zakład\nKup Bonus może być wyłączony w niektórych jurysdykcjach",
    "ru": "Мгновенно даёт функцию бесплатных вращений на одном из трёх уровней:\n\n3 скаттера ({freeSpins3} вращений): {bonusCost3}× общей ставки — RTP {bonusRtp3}%\n4 скаттера ({freeSpins4} вращений): {bonusCost4}× общей ставки — RTP {bonusRtp4}%\n5 скаттеров ({freeSpins5} вращений): {bonusCost5}× общей ставки — RTP {bonusRtp5}%\n\nМаксимальный выигрыш: {maxWin}× ставки\nПокупка бонуса может быть отключена в некоторых юрисдикциях",
    "ja": "3段階のいずれかでフリースピン機能を即座に付与：\n\n3スキャッター（{freeSpins3}回）: {bonusCost3}×総ベット — RTP {bonusRtp3}%\n4スキャッター（{freeSpins4}回）: {bonusCost4}×総ベット — RTP {bonusRtp4}%\n5スキャッター（{freeSpins5}回）: {bonusCost5}×総ベット — RTP {bonusRtp5}%\n\n最大当たり: {maxWin}×ベット\n一部地域ではボーナス購入が無効の場合があります",
    "ko": "세 가지 단계 중 하나로 프리 스핀 기능을 즉시 지급:\n\n3 스캐터({freeSpins3}회): {bonusCost3}× 총 베팅 — RTP {bonusRtp3}%\n4 스캐터({freeSpins4}회): {bonusCost4}× 총 베팅 — RTP {bonusRtp4}%\n5 스캐터({freeSpins5}회): {bonusCost5}× 총 베팅 — RTP {bonusRtp5}%\n\n최대 당첨: {maxWin}× 베팅\n일부 관할 구역에서는 보너스 구매가 비활성화될 수 있음",
    "zh": "立即以三档之一获得免费旋转功能：\n\n3个Scatter（{freeSpins3}次）: {bonusCost3}×总投注 — RTP {bonusRtp3}%\n4个Scatter（{freeSpins4}次）: {bonusCost4}×总投注 — RTP {bonusRtp4}%\n5个Scatter（{freeSpins5}次）: {bonusCost5}×总投注 — RTP {bonusRtp5}%\n\n最大赢赏: {maxWin}×投注\n部分司法管辖区可能禁用奖励购买",
    "ar": "يمنح فورًا ميزة الدورات المجانية على أحد المستويات الثلاثة:\n\n3 scatters ({freeSpins3} دورات): {bonusCost3}× إجمالي الرهان — RTP {bonusRtp3}%\n4 scatters ({freeSpins4} دورات): {bonusCost4}× إجمالي الرهان — RTP {bonusRtp4}%\n5 scatters ({freeSpins5} دورات): {bonusCost5}× إجمالي الرهان — RTP {bonusRtp5}%\n\nالحد الأقصى للربح: {maxWin}× الرهان\nقد يُعطّل شراء المكافأة في بعض الولايات القضائية",
    "hi": "तीन स्तरों में से किसी एक पर तुरंत फ्री स्पिन फीचर देता है:\n\n3 स्कैटर ({freeSpins3} स्पिन): {bonusCost3}× कुल बेट — RTP {bonusRtp3}%\n4 स्कैटर ({freeSpins4} स्पिन): {bonusCost4}× कुल बेट — RTP {bonusRtp4}%\n5 स्कैटर ({freeSpins5} स्पिन): {bonusCost5}× कुल बेट — RTP {bonusRtp5}%\n\nअधिकतम जीत: {maxWin}× बेट\nकुछ क्षेत्राधिकारों में बोनस खरीद अक्षम हो सकती है",
    "id": "Langsung memberikan fitur Putaran Gratis pada salah satu dari tiga tingkat:\n\n3 Scatter ({freeSpins3} putaran): {bonusCost3}× total taruhan — RTP {bonusRtp3}%\n4 Scatter ({freeSpins4} putaran): {bonusCost4}× total taruhan — RTP {bonusRtp4}%\n5 Scatter ({freeSpins5} putaran): {bonusCost5}× total taruhan — RTP {bonusRtp5}%\n\nKemenangan maksimum: {maxWin}× taruhan\nBeli Bonus mungkin dinonaktifkan di yurisdiksi tertentu",
    "tr": "Üç kademeden birinde anında Ücretsiz Döndürme özelliğini verir:\n\n3 Scatter ({freeSpins3} döndürme): {bonusCost3}× toplam bahis — RTP %{bonusRtp3}\n4 Scatter ({freeSpins4} döndürme): {bonusCost4}× toplam bahis — RTP %{bonusRtp4}\n5 Scatter ({freeSpins5} döndürme): {bonusCost5}× toplam bahis — RTP %{bonusRtp5}\n\nMaksimum kazanç: {maxWin}× bahis\nBonus Satın Al bazı yargı bölgelerinde devre dışı olabilir",
    "vi": "Trao ngay tính năng Vòng Quay Miễn Phí ở một trong ba cấp:\n\n3 Scatter ({freeSpins3} vòng): {bonusCost3}× tổng cược — RTP {bonusRtp3}%\n4 Scatter ({freeSpins4} vòng): {bonusCost4}× tổng cược — RTP {bonusRtp4}%\n5 Scatter ({freeSpins5} vòng): {bonusCost5}× tổng cược — RTP {bonusRtp5}%\n\nThắng tối đa: {maxWin}× cược\nMua Bonus có thể bị vô hiệu ở một số khu vực pháp lý",
    "fi": "Antaa heti ilmaiskierrosominaisuuden yhdellä kolmesta tasosta:\n\n3 scatteria ({freeSpins3} kierrosta): {bonusCost3}× kokonaispanos — RTP {bonusRtp3}%\n4 scatteria ({freeSpins4} kierrosta): {bonusCost4}× kokonaispanos — RTP {bonusRtp4}%\n5 scatteria ({freeSpins5} kierrosta): {bonusCost5}× kokonaispanos — RTP {bonusRtp5}%\n\nMaksimivoitto: {maxWin}× panos\nBonuksen osto voi olla pois käytöstä tietyillä alueilla",
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

        if line == "\t'GR.SECTION.BONUS_BUY':":
            out.append(line)
            out.append(f"\t'GR.BONUS_BUY.TITLE': '{GR_BONUS_BUY_TITLE[lang]}',")
            out.append("\t'GR.BONUS_BUY.TEXT':")
            out.append(ts_string(GR_BONUS_BUY_TEXT[lang]) + ",")
            i += 1
            while i < len(lines):
                if lines[i].startswith("\t'GR.SECTION.UI_GUIDE':"):
                    break
                if lines[i].startswith("\t'GR.BONUS_BUY."):
                    i += 1
                    if i < len(lines) and lines[i].startswith("\t\t'"):
                        while i < len(lines) and not lines[i].startswith("\t'GR.SECTION."):
                            i += 1
                    continue
                i += 1
            continue

        out.append(line)
        i += 1

    path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Updated {path.relative_to(APP)}")


def main() -> None:
    for path in sorted(GR_DIR.glob("*.ts")):
        if path.name == "index.ts":
            continue
        fix_file(path)


if __name__ == "__main__":
    main()
