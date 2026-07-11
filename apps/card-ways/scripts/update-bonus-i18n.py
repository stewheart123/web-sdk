#!/usr/bin/env python3
"""Update card-ways locale files for three-tier bonus buy."""

from __future__ import annotations

import re
from pathlib import Path

APP = Path(__file__).resolve().parent.parent
UI_DIR = APP / "src" / "i18n" / "uiMessages"
GR_DIR = APP / "src" / "i18n" / "gameRuleMessages"

UI_REPLACEMENTS = {
    "en": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Purchase FREE SPINS for {bonusCost}× your bet.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Triggers the FREE SPINS feature instantly.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} FREE SPINS',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Instantly awards {freeSpins} Free Spins with {scatterCount} Scatters.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Purchase for {bonusCost}× your bet.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount}-SCATTER BONUS BUY ACTIVATED',\n"
        ),
    },
    "de": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Freispiele für {bonusCost}× Einsatz kaufen.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Löst sofort die Freispiel-Funktion aus.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} FREISPIELE',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Gewährt sofort {freeSpins} Freispiele mit {scatterCount} Scattern.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Kauf für {bonusCost}× Ihren Einsatz.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount}-SCATTER BONUS-KAUF AKTIVIERT',\n"
        ),
    },
    "es": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Compra Giros Gratis por {bonusCost}× tu apuesta.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Activa la función de Giros Gratis al instante.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} GIROS GRATIS',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Otorga al instante {freeSpins} Giros Gratis con {scatterCount} Scatters.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Compra por {bonusCost}× tu apuesta.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'COMPRA BONUS {scatterCount} SCATTER ACTIVADA',\n"
        ),
    },
    "fr": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Achetez des Tours Gratuits pour {bonusCost}× votre mise.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Déclenche instantanément la fonction Tours Gratuits.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} TOURS GRATUITS',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Accorde instantanément {freeSpins} Tours Gratuits avec {scatterCount} Scatters.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Achetez pour {bonusCost}× votre mise.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'ACHAT BONUS {scatterCount} SCATTER ACTIVÉ',\n"
        ),
    },
    "pt": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Compre Rodadas Grátis por {bonusCost}× a sua aposta.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Ativa instantaneamente a funcionalidade Rodadas Grátis.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} RODADAS GRÁTIS',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Concede instantaneamente {freeSpins} Rodadas Grátis com {scatterCount} Scatters.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Compre por {bonusCost}× a sua aposta.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'COMPRA BÓNUS {scatterCount} SCATTER ATIVADA',\n"
        ),
    },
    "pl": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Kup Darmowe Spiny za {bonusCost}× zakładu.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Natychmiast uruchamia funkcję Darmowych Spinów.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} DARMOWE SPINY',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Natychmiast przyznaje {freeSpins} Darmowych Spinów z {scatterCount} Scatterami.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Kup za {bonusCost}× zakładu.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'KUP BONUS {scatterCount} SCATTER AKTYWOWANY',\n"
        ),
    },
    "ru": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Купите бесплатные вращения за {bonusCost}× ставки.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Мгновенно запускает функцию бесплатных вращений.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} БЕСПЛАТНЫХ ВРАЩЕНИЙ',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Мгновенно даёт {freeSpins} бесплатных вращений с {scatterCount} скаттерами.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Купить за {bonusCost}× ставки.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'ПОКУПКА БОНУСА {scatterCount} SCATTER АКТИВИРОВАНА',\n"
        ),
    },
    "ja": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'ベットの{bonusCost}×でフリースピンを購入。',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'フリースピン機能を即座に開始します。',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} フリースピン',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': '{scatterCount}個のスキャッターで{freeSpins}回のフリースピンを即座に付与。',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'ベットの{bonusCost}×で購入。',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount} SCATTER ボーナス購入が有効',\n"
        ),
    },
    "ko": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': '베팅의 {bonusCost}×로 프리 스핀 구매.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': '프리 스핀 기능을 즉시 시작합니다.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} 프리 스핀',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': '{scatterCount}개의 스캐터로 {freeSpins}회 프리 스핀을 즉시 지급합니다.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': '베팅의 {bonusCost}×로 구매.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount} SCATTER 보너스 구매 활성화',\n"
        ),
    },
    "zh": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': '以{bonusCost}×投注购买免费旋转。',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': '立即触发免费旋转功能。',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} 免费旋转',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': '立即获得 {scatterCount} 个 Scatter 的 {freeSpins} 次免费旋转。',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': '以 {bonusCost}× 投注购买。',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount} SCATTER 奖励购买已激活',\n"
        ),
    },
    "ar": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'اشترِ دورات مجانية مقابل {bonusCost}× رهانك.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'يبدأ ميزة الدورات المجانية فوراً.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} دورات مجانية',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'يمنح فوراً {freeSpins} دورات مجانية مع {scatterCount} scatters.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'اشترِ مقابل {bonusCost}× رهانك.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'تم تفعيل شراء المكافأة {scatterCount} SCATTER',\n"
        ),
    },
    "hi": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'अपनी बेट के {bonusCost}× पर फ्री स्पिन खरीदें।',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'फ्री स्पिन फीचर तुरंत शुरू करता है।',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} फ्री स्पिन',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': '{scatterCount} स्कैटर के साथ तुरंत {freeSpins} फ्री स्पिन देता है।',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': '{bonusCost}× बेट पर खरीदें।',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount}-SCATTER बोनस खरीद सक्रिय',\n"
        ),
    },
    "id": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Beli Putaran Gratis seharga {bonusCost}× taruhan Anda.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Langsung memicu fitur Putaran Gratis.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} PUTARAN GRATIS',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Langsung memberikan {freeSpins} Putaran Gratis dengan {scatterCount} Scatter.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Beli seharga {bonusCost}× taruhan Anda.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'BELI BONUS {scatterCount} SCATTER DIAKTIFKAN',\n"
        ),
    },
    "tr": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Bahsinizin {bonusCost}× katına Ücretsiz Döndürme satın alın.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Ücretsiz Döndürme özelliğini anında başlatır.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} ÜCRETSİZ DÖNDÜRME',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': '{scatterCount} Scatter ile anında {freeSpins} Ücretsiz Döndürme verir.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Bahsinizin {bonusCost}× katına satın alın.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount} SCATTER BONUS SATIN ALMA ETKİN',\n"
        ),
    },
    "vi": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Mua Vòng Quay Miễn Phí với {bonusCost}× cược của bạn.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Kích hoạt ngay tính năng Vòng Quay Miễn Phí.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} VÒNG QUAY MIỄN PHÍ',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Trao ngay {freeSpins} Vòng Quay Miễn Phí với {scatterCount} Scatter.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Mua với {bonusCost}× cược của bạn.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': 'MUA BONUS {scatterCount} SCATTER ĐÃ KÍCH HOẠT',\n"
        ),
    },
    "fi": {
        "old": (
            "\t'UI.BONUS_BUY.DIALOG': 'Osta ilmaiskierrokset hintaan {bonusCost}× panos.',\n"
            "\t'UI.BONUS_BUY.DESCRIPTION': 'Käynnistää ilmaiskierrosominaisuuden heti.',\n"
        ),
        "new": (
            "\t'UI.BONUS_BUY.TIER.TITLE': '{scatterCount} SCATTER — {freeSpins} ILMAISKIERROSTA',\n"
            "\t'UI.BONUS_BUY.TIER.DESCRIPTION': 'Antaa heti {freeSpins} ilmaiskierrosta {scatterCount} scatterilla.',\n"
            "\t'UI.BONUS_BUY.TIER.DIALOG': 'Osta hintaan {bonusCost}× panos.',\n"
            "\t'UI.BONUS_BUY.TIER.TICKER': '{scatterCount} SCATTER BONUS-OSTO AKTIVOITU',\n"
        ),
    },
}

GR_SCATTER_SYMBOL = {
    "en": "'GR.SYMBOL.SCATTER': '3 Scatters award 10, 4 award 15, and 5 award 20 Free Spins.'",
    "de": "'GR.SYMBOL.SCATTER': '3 Scatter gewähren 10, 4 gewähren 15 und 5 gewähren 20 Freispiele.'",
    "es": "'GR.SYMBOL.SCATTER': '3 Scatters otorgan 10, 4 otorgan 15 y 5 otorgan 20 Giros Gratis.'",
    "fr": "'GR.SYMBOL.SCATTER': '3 Scatters accordent 10, 4 accordent 15 et 5 accordent 20 Tours Gratuits.'",
    "pt": "'GR.SYMBOL.SCATTER': '3 Scatters concedem 10, 4 concedem 15 e 5 concedem 20 Rodadas Grátis.'",
    "pl": "'GR.SYMBOL.SCATTER': '3 Scattery dają 10, 4 dają 15, a 5 daje 20 Darmowych Spinów.'",
    "ru": "'GR.SYMBOL.SCATTER': '3 скаттера дают 10, 4 — 15, 5 — 20 бесплатных вращений.'",
    "ja": "'GR.SYMBOL.SCATTER': 'スキャッター3個で10回、4個で15回、5個で20回のフリースピン。'",
    "ko": "'GR.SYMBOL.SCATTER': '스캐터 3개는 10회, 4개는 15회, 5개는 20회 프리 스핀을 지급합니다.'",
    "zh": "'GR.SYMBOL.SCATTER': '3个Scatter奖励10次，4个奖励15次，5个奖励20次免费旋转。'",
    "ar": "'GR.SYMBOL.SCATTER': '3 scatters تمنح 10، و4 تمنح 15، و5 تمنح 20 دورة مجانية.'",
    "hi": "'GR.SYMBOL.SCATTER': '3 स्कैटर 10, 4 स्कैटर 15 और 5 स्कैटर 20 फ्री स्पिन देते हैं।'",
    "id": "'GR.SYMBOL.SCATTER': '3 Scatter memberi 10, 4 memberi 15, dan 5 memberi 20 Putaran Gratis.'",
    "tr": "'GR.SYMBOL.SCATTER': '3 Scatter 10, 4 Scatter 15 ve 5 Scatter 20 Ücretsiz Döndürme verir.'",
    "vi": "'GR.SYMBOL.SCATTER': '3 Scatter thưởng 10, 4 thưởng 15 và 5 thưởng 20 Vòng Quay Miễn Phí.'",
    "fi": "'GR.SYMBOL.SCATTER': '3 scatteria antaa 10, 4 antaa 15 ja 5 antaa 20 ilmaiskierrosta.'",
}

GR_SCATTER_TEXT = {
    "en": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Scatter symbols appear on all reels. Landing 3 Scatters awards 10 Free Spins, 4 Scatters awards 15 Free Spins, and 5 Scatters awards 20 Free Spins. Scatter wins are evaluated separately from ways wins.'",
    "de": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Scatter-Symbole erscheinen auf allen Walzen. 3 Scatter gewähren 10 Freispiele, 4 Scatter gewähren 15 Freispiele und 5 Scatter gewähren 20 Freispiele. Scatter-Gewinne werden getrennt von Ways-Gewinnen bewertet.'",
    "es": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Los símbolos Scatter aparecen en todos los rodillos. 3 Scatters otorgan 10 Giros Gratis, 4 Scatters otorgan 15 Giros Gratis y 5 Scatters otorgan 20 Giros Gratis. Las ganancias Scatter se evalúan por separado de las ganancias por formas.'",
    "fr": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Les symboles Scatter apparaissent sur tous les rouleaux. 3 Scatters accordent 10 Tours Gratuits, 4 Scatters accordent 15 Tours Gratuits et 5 Scatters accordent 20 Tours Gratuits. Les gains Scatter sont évalués séparément des gains ways.'",
    "pt": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Os símbolos Scatter aparecem em todos os rolos. 3 Scatters concedem 10 Rodadas Grátis, 4 Scatters concedem 15 Rodadas Grátis e 5 Scatters concedem 20 Rodadas Grátis. Os ganhos Scatter são avaliados separadamente dos ganhos por formas.'",
    "pl": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Symbole Scatter pojawiają się na wszystkich bębnach. 3 Scattery dają 10 Darmowych Spinów, 4 Scattery dają 15 Darmowych Spinów, a 5 Scatterów daje 20 Darmowych Spinów. Wygrane Scatter są oceniane oddzielnie od wygranych ways.'",
    "ru": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Символы Scatter появляются на всех барабанах. 3 скаттера дают 10 бесплатных вращений, 4 — 15, 5 — 20. Выигрыши Scatter оцениваются отдельно от ways-выигрышей.'",
    "ja": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'スキャッターシンボルはすべてのリールに出現します。スキャッター3個で10回、4個で15回、5個で20回のフリースピンを獲得します。スキャッター勝利はウェイ勝利とは別に評価されます。'",
    "ko": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'스캐터 심볼은 모든 릴에 나타납니다. 스캐터 3개는 10회, 4개는 15회, 5개는 20회 프리 스핀을 지급합니다. 스캐터 승리는 ways 승리와 별도로 평가됩니다.'",
    "zh": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Scatter符号出现在所有转轴上。3个Scatter奖励10次免费旋转，4个奖励15次，5个奖励20次。Scatter赢赏与ways赢赏分开计算。'",
    "ar": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'تظهر رموز Scatter على جميع البكرات. 3 scatters تمنح 10 دورات مجانية، و4 تمنح 15، و5 تمنح 20. تُقيَّم أرباح Scatter بشكل منفصل عن أرباح ways.'",
    "hi": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'स्कैटर सिंबल सभी रीलों पर दिखते हैं। 3 स्कैटर 10, 4 स्कैटर 15 और 5 स्कैटर 20 फ्री स्पिन देते हैं। स्कैटर जीत ways जीत से अलग मूल्यांकित होती है।'",
    "id": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Simbol Scatter muncul di semua reel. 3 Scatter memberi 10 Putaran Gratis, 4 Scatter memberi 15 Putaran Gratis, dan 5 Scatter memberi 20 Putaran Gratis. Kemenangan Scatter dievaluasi terpisah dari kemenangan ways.'",
    "tr": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Scatter sembolleri tüm makaralarda görünür. 3 Scatter 10, 4 Scatter 15 ve 5 Scatter 20 Ücretsiz Döndürme verir. Scatter kazançları ways kazançlarından ayrı değerlendirilir.'",
    "vi": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Biểu tượng Scatter xuất hiện trên mọi guồng. 3 Scatter thưởng 10, 4 Scatter thưởng 15 và 5 Scatter thưởng 20 Vòng Quay Miễn Phí. Thắng Scatter được tính riêng khỏi thắng ways.'",
    "fi": "'GR.SCATTER_FREE_SPINS.TEXT':\n\t\t'Scatter-symbolit ilmestyvät kaikille rullille. 3 scatteria antaa 10, 4 scatteria antaa 15 ja 5 scatteria antaa 20 ilmaiskierrosta. Scatter-voitot arvioidaan erillään ways-voitoista.'",
}

GR_BET_MODES = {
    "en": "'GR.BET_MODES.TEXT':\n\t\t'The normal mode of this game has a theoretical expected return of {baseRtp}%.\\n\\nThe player can buy Free Spins at three tiers: {bonusCost3}× (10 spins), {bonusCost4}× (15 spins), or {bonusCost5}× (20 spins) the underlying bet. Each Free Spins buy mode has a theoretical expected return of {bonusRtp}%. Purchasing Free Spins triggers the bonus feature immediately.\\n\\nThe maximum win in each bet mode is {maxWin}× the underlying bet.'",
    "de": "'GR.BET_MODES.TEXT':\n\t\t'Der Normalmodus hat eine theoretische erwartete Rendite von {baseRtp}%.\\n\\nDer Spieler kann Freispiele in drei Stufen kaufen: {bonusCost3}× (10 Spins), {bonusCost4}× (15 Spins) oder {bonusCost5}× (20 Spins) des Grundeinsatzes. Jeder Freispiel-Kaufmodus hat eine theoretische Rendite von {bonusRtp}%. Der Kauf löst die Bonus-Funktion sofort aus.\\n\\nDer maximale Gewinn in jedem Einsatzmodus beträgt {maxWin}× den Grundeinsatz.'",
    "es": "'GR.BET_MODES.TEXT':\n\t\t'El modo normal tiene un retorno teórico esperado del {baseRtp}%.\\n\\nEl jugador puede comprar Giros Gratis en tres niveles: {bonusCost3}× (10 giros), {bonusCost4}× (15 giros) o {bonusCost5}× (20 giros) la apuesta base. Cada modo de compra tiene un retorno teórico del {bonusRtp}%. La compra activa la función de bono inmediatamente.\\n\\nEl premio máximo en cada modo de apuesta es {maxWin}× la apuesta base.'",
    "fr": "'GR.BET_MODES.TEXT':\n\t\t'Le mode normal a un retour théorique attendu de {baseRtp}%.\\n\\nLe joueur peut acheter des Tours Gratuits en trois niveaux : {bonusCost3}× (10 tours), {bonusCost4}× (15 tours) ou {bonusCost5}× (20 tours) la mise de base. Chaque mode d\\'achat a un retour théorique de {bonusRtp}%. L\\'achat déclenche immédiatement la fonction bonus.\\n\\nLe gain maximum dans chaque mode de mise est de {maxWin}× la mise de base.'",
    "pt": "'GR.BET_MODES.TEXT':\n\t\t'O modo normal tem um retorno teórico esperado de {baseRtp}%.\\n\\nO jogador pode comprar Rodadas Grátis em três níveis: {bonusCost3}× (10 rodadas), {bonusCost4}× (15 rodadas) ou {bonusCost5}× (20 rodadas) a aposta base. Cada modo de compra tem um retorno teórico de {bonusRtp}%. A compra ativa a funcionalidade de bónus imediatamente.\\n\\nO prémio máximo em cada modo de aposta é {maxWin}× a aposta base.'",
    "pl": "'GR.BET_MODES.TEXT':\n\t\t'Normalny tryb ma teoretyczny oczekiwany zwrot {baseRtp}%.\\n\\nGracz może kupić Darmowe Spiny na trzech poziomach: {bonusCost3}× (10 spinów), {bonusCost4}× (15 spinów) lub {bonusCost5}× (20 spinów) zakładu podstawowego. Każdy tryb zakupu ma teoretyczny zwrot {bonusRtp}%. Zakup natychmiast uruchamia funkcję bonusową.\\n\\nMaksymalna wygrana w każdym trybie to {maxWin}× zakład podstawowy.'",
    "ru": "'GR.BET_MODES.TEXT':\n\t\t'Обычный режим имеет теоретическую ожидаемую отдачу {baseRtp}%.\\n\\nИгрок может купить бесплатные вращения на трёх уровнях: {bonusCost3}× (10 вращений), {bonusCost4}× (15 вращений) или {bonusCost5}× (20 вращений) базовой ставки. Каждый режим покупки имеет теоретическую отдачу {bonusRtp}%. Покупка сразу запускает бонусную функцию.\\n\\nМаксимальный выигрыш в каждом режиме — {maxWin}× базовой ставки.'",
    "ja": "'GR.BET_MODES.TEXT':\n\t\t'通常モードの理論上の期待還元率は{baseRtp}%です。\\n\\nプレイヤーは3段階でフリースピンを購入できます：{bonusCost3}×（10回）、{bonusCost4}×（15回）、{bonusCost5}×（20回）のベット。各購入モードの理論還元率は{bonusRtp}%です。購入で即座にボーナス機能が発動します。\\n\\n各ベットモードの最大当たりはベットの{maxWin}×です。'",
    "ko": "'GR.BET_MODES.TEXT':\n\t\t'일반 모드의 이론적 기대 수익률은 {baseRtp}%입니다.\\n\\n플레이어는 세 가지 단계로 프리 스핀을 구매할 수 있습니다: {bonusCost3}×(10회), {bonusCost4}×(15회), {bonusCost5}×(20회) 기본 베팅. 각 구매 모드의 이론적 수익률은 {bonusRtp}%입니다. 구매 시 보너스 기능이 즉시 시작됩니다.\\n\\n각 베팅 모드의 최대 당첨은 기본 베팅의 {maxWin}×입니다.'",
    "zh": "'GR.BET_MODES.TEXT':\n\t\t'正常模式的理论预期回报为{baseRtp}%。\\n\\n玩家可分三档购买免费旋转：{bonusCost3}×（10次）、{bonusCost4}×（15次）或{bonusCost5}×（20次）基础投注。每档购买模式的理论回报为{bonusRtp}%。购买后立即触发奖励功能。\\n\\n各投注模式的最大赢赏为{maxWin}×基础投注。'",
    "ar": "'GR.BET_MODES.TEXT':\n\t\t'الوضع العادي له عائد متوقع نظري بنسبة {baseRtp}%.\\n\\nيمكن للاعب شراء دورات مجانية على ثلاث مستويات: {bonusCost3}× (10 دورات)، {bonusCost4}× (15 دورة)، أو {bonusCost5}× (20 دورة) من الرهان الأساسي. لكل وضع شراء عائد نظري بنسبة {bonusRtp}%. الشراء يفعّل ميزة المكافأة فورًا.\\n\\nالحد الأقصى للربح في كل وضع رهان هو {maxWin}× الرهان الأساسي.'",
    "hi": "'GR.BET_MODES.TEXT':\n\t\t'सामान्य मोड की सैद्धांतिक अपेक्षित वापसी {baseRtp}% है।\\n\\nखिलाड़ी तीन स्तरों पर फ्री स्पिन खरीद सकता है: {bonusCost3}× (10 स्पिन), {bonusCost4}× (15 स्पिन), या {bonusCost5}× (20 स्पिन) अंतर्निहित बेट। प्रत्येक खरीद मोड की सैद्धांतिक वापसी {bonusRtp}% है। खरीद तुरंत बोनस फीचर शुरू करती है।\\n\\nप्रत्येक बेट मोड में अधिकतम जीत {maxWin}× अंतर्निहित बेट है।'",
    "id": "'GR.BET_MODES.TEXT':\n\t\t'Mode normal memiliki pengembalian teoritis yang diharapkan sebesar {baseRtp}%.\\n\\nPemain dapat membeli Putaran Gratis dalam tiga tingkat: {bonusCost3}× (10 putaran), {bonusCost4}× (15 putaran), atau {bonusCost5}× (20 putaran) taruhan dasar. Setiap mode beli memiliki pengembalian teoritis {bonusRtp}%. Pembelian langsung memicu fitur bonus.\\n\\nKemenangan maksimum di setiap mode taruhan adalah {maxWin}× taruhan dasar.'",
    "tr": "'GR.BET_MODES.TEXT':\n\t\t'Normal modun teorik beklenen getirisi %{baseRtp}.\\n\\nOyuncu üç kademede Ücretsiz Döndürme satın alabilir: {bonusCost3}× (10 döndürme), {bonusCost4}× (15 döndürme) veya {bonusCost5}× (20 döndürme) temel bahis. Her satın alma modunun teorik getirisi %{bonusRtp}. Satın alma bonus özelliğini anında tetikler.\\n\\nHer bahis modunda maksimum kazanç temel bahsin {maxWin}× katıdır.'",
    "vi": "'GR.BET_MODES.TEXT':\n\t\t'Chế độ thường có tỷ lệ hoàn trả lý thuyết kỳ vọng {baseRtp}%.\\n\\nNgười chơi có thể mua Vòng Quay Miễn Phí ở ba cấp: {bonusCost3}× (10 vòng), {bonusCost4}× (15 vòng) hoặc {bonusCost5}× (20 vòng) cược cơ bản. Mỗi chế độ mua có tỷ lệ hoàn trả lý thuyết {bonusRtp}%. Mua sẽ kích hoạt tính năng bonus ngay lập tức.\\n\\nThắng tối đa trong mỗi chế độ cược là {maxWin}× cược cơ bản.'",
    "fi": "'GR.BET_MODES.TEXT':\n\t\t'Normaalitilassa teoreettinen odotettu tuotto on {baseRtp}%.\\n\\nPelaaja voi ostaa ilmaiskierroksia kolmella tasolla: {bonusCost3}× (10 kierrosta), {bonusCost4}× (15 kierrosta) tai {bonusCost5}× (20 kierrosta) peruspanosta. Jokaisen oston teoreettinen tuotto on {bonusRtp}%. Osto käynnistää bonusominaisuuden heti.\\n\\nMaksimivoitto jokaisessa panostilassa on {maxWin}× peruspanos.'",
}

GR_BONUS_BUY_TIER = {
    "en": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'BONUS BUY — {scatterCount} SCATTER ({freeSpins} SPINS)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Cost: {bonusCost}× total bet\\nInstantly awards the Free Spins feature ({freeSpins} spins)\\nTheoretical RTP: {bonusRtp}%\\nMaximum win: {maxWin}× bet\\nBonus Buy may be disabled in certain jurisdictions',\n"
    ),
    "de": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'BONUS KAUFEN — {scatterCount} SCATTER ({freeSpins} SPINS)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Kosten: {bonusCost}× Gesamteinsatz\\nGewährt sofort die Freispiel-Funktion ({freeSpins} Spins)\\nTheoretischer RTP: {bonusRtp}%\\nMaximalgewinn: {maxWin}× Einsatz\\nBonus-Kauf kann in bestimmten Rechtsgebieten deaktiviert sein',\n"
    ),
    "es": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'COMPRA DE BONO — {scatterCount} SCATTER ({freeSpins} GIROS)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Costo: {bonusCost}× apuesta total\\nOtorga instantáneamente la función de Giros Gratis ({freeSpins} giros)\\nRTP teórico: {bonusRtp}%\\nPremio máximo: {maxWin}× apuesta\\nLa Compra de Bono puede estar deshabilitada en ciertas jurisdicciones',\n"
    ),
    "fr": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'ACHAT BONUS — {scatterCount} SCATTER ({freeSpins} TOURS)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Coût : {bonusCost}× mise totale\\nAccorde instantanément la fonction Tours Gratuits ({freeSpins} tours)\\nRTP théorique : {bonusRtp}%\\nGain maximum : {maxWin}× mise\\nL\\'Achat Bonus peut être désactivé dans certaines juridictions',\n"
    ),
    "pt": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'COMPRAR BÓNUS — {scatterCount} SCATTER ({freeSpins} RODADAS)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Custo: {bonusCost}× aposta total\\nConcede instantaneamente a funcionalidade Rodadas Grátis ({freeSpins} rodadas)\\nRTP teórico: {bonusRtp}%\\nPrémio máximo: {maxWin}× aposta\\nA Compra de Bónus pode estar desativada em certas jurisdições',\n"
    ),
    "pl": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'KUP BONUS — {scatterCount} SCATTER ({freeSpins} SPINÓW)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Koszt: {bonusCost}× całkowity zakład\\nNatychmiast przyznaje funkcję Darmowych Spinów ({freeSpins} spinów)\\nTeoretyczny RTP: {bonusRtp}%\\nMaksymalna wygrana: {maxWin}× zakład\\nKup Bonus może być wyłączony w niektórych jurysdykcjach',\n"
    ),
    "ru": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'ПОКУПКА БОНУСА — {scatterCount} SCATTER ({freeSpins} ВРАЩЕНИЙ)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Стоимость: {bonusCost}× общей ставки\\nМгновенно даёт функцию бесплатных вращений ({freeSpins} вращений)\\nТеоретический RTP: {bonusRtp}%\\nМаксимальный выигрыш: {maxWin}× ставки\\nПокупка бонуса может быть отключена в некоторых юрисдикциях',\n"
    ),
    "ja": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'ボーナス購入 — {scatterCount} SCATTER（{freeSpins}回）',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'費用：総ベットの{bonusCost}×\\n即座にフリースピン機能（{freeSpins}回）を獲得\\n理論RTP：{bonusRtp}%\\n最大当たり：ベットの{maxWin}×\\n一部地域ではボーナス購入が無効の場合があります',\n"
    ),
    "ko": (
        "\t'GR.BONUS_BUY.TIER.TITLE': '보너스 구매 — {scatterCount} SCATTER ({freeSpins}회)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'비용: 총 베팅의 {bonusCost}×\\n즉시 프리 스핀 기능({freeSpins}회) 지급\\n이론 RTP: {bonusRtp}%\\n최대 당첨: 베팅의 {maxWin}×\\n일부 관할 구역에서는 보너스 구매가 비활성화될 수 있음',\n"
    ),
    "zh": (
        "\t'GR.BONUS_BUY.TIER.TITLE': '奖励购买 — {scatterCount} SCATTER（{freeSpins}次）',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'费用：总投注的{bonusCost}×\\n立即获得免费旋转功能（{freeSpins}次）\\n理论RTP：{bonusRtp}%\\n最大赢赏：投注的{maxWin}×\\n部分司法管辖区可能禁用奖励购买',\n"
    ),
    "ar": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'شراء المكافأة — {scatterCount} SCATTER ({freeSpins} دورات)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'التكلفة: {bonusCost}× إجمالي الرهان\\nيمنح فورًا ميزة الدورات المجانية ({freeSpins} دورات)\\nRTP نظري: {bonusRtp}%\\nالحد الأقصى للربح: {maxWin}× الرهان\\nقد يُعطّل شراء المكافأة في بعض الولايات القضائية',\n"
    ),
    "hi": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'बोनस खरीदें — {scatterCount} SCATTER ({freeSpins} स्पिन)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'लागत: {bonusCost}× कुल बेट\\nतुरंत फ्री स्पिन फीचर ({freeSpins} स्पिन) देता है\\nसैद्धांतिक RTP: {bonusRtp}%\\nअधिकतम जीत: {maxWin}× बेट\\nकुछ क्षेत्राधिकारों में बोनस खरीद अक्षम हो सकती है',\n"
    ),
    "id": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'BELI BONUS — {scatterCount} SCATTER ({freeSpins} PUTARAN)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Biaya: {bonusCost}× total taruhan\\nLangsung memberikan fitur Putaran Gratis ({freeSpins} putaran)\\nRTP teoritis: {bonusRtp}%\\nKemenangan maksimum: {maxWin}× taruhan\\nBeli Bonus mungkin dinonaktifkan di yurisdiksi tertentu',\n"
    ),
    "tr": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'BONUS SATIN AL — {scatterCount} SCATTER ({freeSpins} DÖNDÜRME)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Maliyet: {bonusCost}× toplam bahis\\nAnında Ücretsiz Döndürme özelliğini verir ({freeSpins} döndürme)\\nTeorik RTP: %{bonusRtp}\\nMaksimum kazanç: {maxWin}× bahis\\nBonus Satın Al bazı yargı bölgelerinde devre dışı olabilir',\n"
    ),
    "vi": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'MUA BONUS — {scatterCount} SCATTER ({freeSpins} VÒNG)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Chi phí: {bonusCost}× tổng cược\\nTrao ngay tính năng Vòng Quay Miễn Phí ({freeSpins} vòng quay)\\nRTP lý thuyết: {bonusRtp}%\\nThắng tối đa: {maxWin}× cược\\nMua Bonus có thể bị vô hiệu ở một số khu vực pháp lý',\n"
    ),
    "fi": (
        "\t'GR.BONUS_BUY.TIER.TITLE': 'OSTA BONUS — {scatterCount} SCATTER ({freeSpins} KIERROSTA)',\n"
        "\t'GR.BONUS_BUY.TIER.TEXT':\n"
        "\t\t'Hinta: {bonusCost}× kokonaispanos\\nAntaa heti ilmaiskierrosominaisuuden ({freeSpins} kierrosta)\\nTeoreettinen RTP: {bonusRtp}%\\nMaksimivoitto: {maxWin}× panos\\nBonuksen osto voi olla pois käytöstä tietyillä alueilla',\n"
    ),
}


def update_ui(lang: str) -> None:
    path = UI_DIR / f"{lang}.ts"
    text = path.read_text(encoding="utf-8")
    repl = UI_REPLACEMENTS[lang]
    if repl["old"] not in text:
        raise RuntimeError(f"{path}: expected UI bonus block not found")
    text = text.replace(repl["old"], repl["new"])
    path.write_text(text, encoding="utf-8")
    print(f"Updated {path.relative_to(APP)}")


def update_gr(lang: str) -> None:
    path = GR_DIR / f"{lang}.ts"
    text = path.read_text(encoding="utf-8")

    text = re.sub(
        r"\t'GR\.SYMBOL\.SCATTER': '[^']*',",
        f"\t{GR_SCATTER_SYMBOL[lang]},",
        text,
        count=1,
    )

    text = re.sub(
        r"\t'GR\.SCATTER_FREE_SPINS\.TEXT':\n\t\t'[^']*(?:\\.[^']*)*',",
        f"\t{GR_SCATTER_TEXT[lang]},",
        text,
        count=1,
    )

    text = re.sub(
        r"\t'GR\.BET_MODES\.TEXT':\n\t\t'[^']*(?:\\.[^']*)*',",
        f"\t{GR_BET_MODES[lang]},",
        text,
        count=1,
    )

    text = re.sub(
        r"\t'GR\.BONUS_BUY\.TITLE': '[^']*',\n"
        r"\t'GR\.BONUS_BUY\.TEXT':\n"
        r"\t\t'[^']*(?:\\.[^']*)*',",
        GR_BONUS_BUY_TIER[lang].rstrip("\n"),
        text,
        count=1,
    )

    path.write_text(text, encoding="utf-8")
    print(f"Updated {path.relative_to(APP)}")


def main() -> None:
    for lang in UI_REPLACEMENTS:
        update_ui(lang)
        update_gr(lang)


if __name__ == "__main__":
    main()
