"""Simplify game-rules bonus buy copy and emphasize free spins in buy UI."""
from __future__ import annotations

import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
GR_DIR = APP / "src" / "i18n" / "gameRuleMessages"
UI_DIR = APP / "src" / "i18n" / "uiMessages"

GR_BONUS_BUY_TEXT = {
    "en": "Instantly awards the Free Spins feature. Purchase tiers award 10, 15, or 20 free spins.\n\nMaximum win: {maxWin}× bet\nBonus Buy may be disabled in certain jurisdictions",
    "de": "Gewährt sofort die Freispiel-Funktion. Kaufstufen gewähren 10, 15 oder 20 Freispiele.\n\nMaximalgewinn: {maxWin}× Einsatz\nBonus-Kauf kann in bestimmten Rechtsgebieten deaktiviert sein",
    "es": "Otorga instantáneamente la función de Giros Gratis. Los niveles de compra otorgan 10, 15 o 20 giros gratis.\n\nPremio máximo: {maxWin}× apuesta\nLa Compra de Bono puede estar deshabilitada en ciertas jurisdicciones",
    "fr": "Accorde instantanément la fonction Tours Gratuits. Les niveaux d'achat accordent 10, 15 ou 20 tours gratuits.\n\nGain maximum : {maxWin}× mise\nL'Achat Bonus peut être désactivé dans certaines juridictions",
    "pt": "Concede instantaneamente a funcionalidade Rodadas Grátis. Os níveis de compra concedem 10, 15 ou 20 rodadas grátis.\n\nPrémio máximo: {maxWin}× aposta\nA Compra de Bónus pode estar desativada em certas jurisdições",
    "pl": "Natychmiast przyznaje funkcję Darmowych Spinów. Poziomy zakupu dają 10, 15 lub 20 darmowych spinów.\n\nMaksymalna wygrana: {maxWin}× zakład\nKup Bonus może być wyłączony w niektórych jurysdykcjach",
    "ru": "Мгновенно даёт функцию бесплатных вращений. Уровни покупки дают 10, 15 или 20 бесплатных вращений.\n\nМаксимальный выигрыш: {maxWin}× ставки\nПокупка бонуса может быть отключена в некоторых юрисдикциях",
    "ja": "フリースピン機能を即座に付与します。購入段階により10、15、20回のフリースピンを獲得できます。\n\n最大当たり: {maxWin}×ベット\n一部地域ではボーナス購入が無効の場合があります",
    "ko": "프리 스핀 기능을 즉시 지급합니다. 구매 단계에 따라 10, 15 또는 20회 프리 스핀을 받습니다.\n\n최대 당첨: {maxWin}× 베팅\n일부 관할 구역에서는 보너스 구매가 비활성화될 수 있음",
    "zh": "立即获得免费旋转功能。购买档位分别奖励10、15或20次免费旋转。\n\n最大赢赏: {maxWin}×投注\n部分司法管辖区可能禁用奖励购买",
    "ar": "يمنح فورًا ميزة الدورات المجانية. مستويات الشراء تمنح 10 أو 15 أو 20 دورة مجانية.\n\nالحد الأقصى للربح: {maxWin}× الرهان\nقد يُعطّل شراء المكافأة في بعض الولايات القضائية",
    "hi": "तुरंत फ्री स्पिन फीचर देता है। खरीद स्तर 10, 15 या 20 फ्री स्पिन देते हैं।\n\nअधिकतम जीत: {maxWin}× बेट\nकुछ क्षेत्राधिकारों में बोनस खरीद अक्षम हो सकती है",
    "id": "Langsung memberikan fitur Putaran Gratis. Tingkat pembelian memberi 10, 15, atau 20 putaran gratis.\n\nKemenangan maksimum: {maxWin}× taruhan\nBeli Bonus mungkin dinonaktifkan di yurisdiksi tertentu",
    "tr": "Ücretsiz Döndürme özelliğini anında verir. Satın alma kademeleri 10, 15 veya 20 ücretsiz döndürme verir.\n\nMaksimum kazanç: {maxWin}× bahis\nBonus Satın Al bazı yargı bölgelerinde devre dışı olabilir",
    "vi": "Trao ngay tính năng Vòng Quay Miễn Phí. Các cấp mua thưởng 10, 15 hoặc 20 vòng quay miễn phí.\n\nThắng tối đa: {maxWin}× cược\nMua Bonus có thể bị vô hiệu ở một số khu vực pháp lý",
    "fi": "Antaa heti ilmaiskierrosominaisuuden. Ostotasot antavat 10, 15 tai 20 ilmaiskierrosta.\n\nMaksimivoitto: {maxWin}× panos\nBonuksen osto voi olla pois käytöstä tietyillä alueilla",
}

UI_BONUS_BUY = {
    "en": {
        "title": "{freeSpins} FREE SPINS",
        "description": "{scatterCount} Scatters · {bonusCost}× your bet",
    },
    "de": {
        "title": "{freeSpins} FREISPIELE",
        "description": "{scatterCount} Scatter · {bonusCost}× Einsatz",
    },
    "es": {
        "title": "{freeSpins} GIROS GRATIS",
        "description": "{scatterCount} Scatters · {bonusCost}× apuesta",
    },
    "fr": {
        "title": "{freeSpins} TOURS GRATUITS",
        "description": "{scatterCount} Scatters · {bonusCost}× mise",
    },
    "pt": {
        "title": "{freeSpins} RODADAS GRÁTIS",
        "description": "{scatterCount} Scatters · {bonusCost}× aposta",
    },
    "pl": {
        "title": "{freeSpins} DARMOWE SPINY",
        "description": "{scatterCount} Scattery · {bonusCost}× zakład",
    },
    "ru": {
        "title": "{freeSpins} БЕСПЛАТНЫХ ВРАЩЕНИЙ",
        "description": "{scatterCount} скаттера · {bonusCost}× ставка",
    },
    "ja": {
        "title": "{freeSpins} フリースピン",
        "description": "{scatterCount}スキャッター · {bonusCost}×ベット",
    },
    "ko": {
        "title": "{freeSpins} 프리 스핀",
        "description": "{scatterCount} 스캐터 · {bonusCost}× 베팅",
    },
    "zh": {
        "title": "{freeSpins} 免费旋转",
        "description": "{scatterCount}个Scatter · {bonusCost}×投注",
    },
    "ar": {
        "title": "{freeSpins} دورات مجانية",
        "description": "{scatterCount} scatters · {bonusCost}× رهان",
    },
    "hi": {
        "title": "{freeSpins} फ्री स्पिन",
        "description": "{scatterCount} स्कैटर · {bonusCost}× बेट",
    },
    "id": {
        "title": "{freeSpins} PUTARAN GRATIS",
        "description": "{scatterCount} Scatter · {bonusCost}× taruhan",
    },
    "tr": {
        "title": "{freeSpins} ÜCRETSİZ DÖNDÜRME",
        "description": "{scatterCount} Scatter · {bonusCost}× bahis",
    },
    "vi": {
        "title": "{freeSpins} VÒNG QUAY MIỄN PHÍ",
        "description": "{scatterCount} Scatter · {bonusCost}× cược",
    },
    "fi": {
        "title": "{freeSpins} ILMAISKIERROSTA",
        "description": "{scatterCount} scatteria · {bonusCost}× panos",
    },
}


def ts_string(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n")
    return f"\t\t'{escaped}'"


def fix_game_rules(path: Path) -> None:
    lang = path.stem
    lines = path.read_text(encoding="utf-8").splitlines()
    out: list[str] = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line == "\t'GR.BONUS_BUY.TEXT':":
            out.append(line)
            out.append(ts_string(GR_BONUS_BUY_TEXT[lang]) + ",")
            i += 1
            while i < len(lines) and not lines[i].startswith("\t'GR."):
                i += 1
            continue
        out.append(line)
        i += 1
    path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Updated game rules: {path.name}")


def fix_ui_messages(path: Path) -> None:
    lang = path.stem
    ui = UI_BONUS_BUY[lang]
    text = path.read_text(encoding="utf-8")
    text = re.sub(
        r"\t'UI\.BONUS_BUY\.TIER\.TITLE': '[^']*',",
        f"\t'UI.BONUS_BUY.TIER.TITLE': '{ui['title']}',",
        text,
        count=1,
    )
    text = re.sub(
        r"\t'UI\.BONUS_BUY\.TIER\.DESCRIPTION': '[^']*',",
        f"\t'UI.BONUS_BUY.TIER.DESCRIPTION': '{ui['description']}',",
        text,
        count=1,
    )
    path.write_text(text, encoding="utf-8")
    print(f"Updated UI messages: {path.name}")


LOCALES = set(GR_BONUS_BUY_TEXT.keys())


def main() -> None:
    for path in sorted(GR_DIR.glob("*.ts")):
        if path.stem not in LOCALES:
            continue
        fix_game_rules(path)
    for path in sorted(UI_DIR.glob("*.ts")):
        if path.stem not in LOCALES:
            continue
        fix_ui_messages(path)


if __name__ == "__main__":
    main()
