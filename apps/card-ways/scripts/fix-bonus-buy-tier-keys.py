#!/usr/bin/env python3
"""Replace GR.BONUS_BUY.TIER.* with consolidated GR.BONUS_BUY.TITLE/TEXT."""

from __future__ import annotations

import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
GR_DIR = APP / "src" / "i18n" / "gameRuleMessages"

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
    "en": "Instantly awards the Free Spins feature at one of three tiers:\n\n3 Scatters ({freeSpins3} spins): {bonusCost3}× total bet — RTP {bonusRtp3}%\n4 Scatters ({freeSpins4} spins): {bonusCost4}× total bet — RTP {bonusRtp4}%\n5 Scatters ({freeSpins5} spins): {bonusCost5}× total bet — RTP {bonusRtp5}%\n\nMaximum win: {maxWin}× bet\nBonus Buy may be disabled in certain jurisdictions",
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
    text = path.read_text(encoding="utf-8")

    replacement = (
        f"\t'GR.BONUS_BUY.TITLE': '{GR_BONUS_BUY_TITLE[lang]}',\n"
        f"\t'GR.BONUS_BUY.TEXT':\n{ts_string(GR_BONUS_BUY_TEXT[lang])},\n"
    )

    text, count = re.subn(
        r"\t'GR\.BONUS_BUY\.TIER\.TITLE':[^\n]*\n\t'GR\.BONUS_BUY\.TIER\.TEXT':\n\t\t'(?:[^'\\]|\\.)*',\n",
        replacement,
        text,
        count=1,
    )

    if count == 0 and "GR.BONUS_BUY.TITLE" not in text:
        raise RuntimeError(f"{path}: could not replace bonus buy tier block")

    path.write_text(text, encoding="utf-8")
    print(f"Updated {path.relative_to(APP)}")


def main() -> None:
    for path in sorted(GR_DIR.glob("*.ts")):
        if path.name == "index.ts" or path.stem == "en":
            continue
        fix_file(path)


if __name__ == "__main__":
    main()
