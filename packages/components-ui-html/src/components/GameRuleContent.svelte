<script lang="ts">
	import { stateMeta } from 'state-shared';
	import type { GameRuleData } from 'state-shared';

	type Props = {
		section: 'payTable' | 'gameRules';
	};

	const props: Props = $props();

	const sections = $derived(stateMeta.gameRuleMeta[props.section] as GameRuleData[]);
</script>

{#each sections as section (section.title || section.containers[0]?.title || section.rows)}
	<article class="rule-section">
		{#if section.title}
			<h3 class="rule-section-title">{section.title}</h3>
		{/if}
		<div
			class="rule-grid"
			style:grid-template-columns="repeat({section.columns}, minmax(0, 1fr))"
			style:grid-template-rows="repeat({section.rows}, auto)"
		>
			{#each section.containers as container (`${container.row}-${container.column}-${container.title}`)}
				<div
					class="rule-container"
					class:image-top={(container.images?.length || container.image) && container.imagePosition === 'top'}
					class:image-left={(container.images?.length || container.image) && container.imagePosition === 'left'}
					style:grid-row={container.row + 1}
					style:grid-column={container.column + 1}
				>
					{#if container.images?.length}
						<div class="rule-images">
							{#each container.images as image (`${image}`)}
								<img class="rule-image" src={image} alt="" />
							{/each}
						</div>
					{:else if container.image}
						<img class="rule-image" src={container.image} alt="" />
					{/if}
					<div class="rule-text">
						{#if container.title}
							<h4 class="rule-container-title">{container.title}</h4>
						{/if}
						{#if container.text}
							<p class="rule-container-text">{container.text}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</article>
{/each}

<style lang="scss">
	.rule-section {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		margin-bottom: 1rem;
		padding: 0.85rem 0.9rem;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.07);
		border-radius: 0.5rem;
	}

	.rule-section-title {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.72);
	}

	.rule-grid {
		display: grid;
		gap: 0.75rem;
	}

	.rule-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.7rem 0.8rem;
		background: rgba(0, 0, 0, 0.22);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 0.4rem;
	}

	.rule-container.image-left {
		flex-direction: row;
		align-items: flex-start;
		gap: 0.75rem;
	}

	.rule-container.image-top {
		flex-direction: column;
	}

	.rule-images {
		display: flex;
		flex-shrink: 0;
		flex-wrap: wrap;
		gap: 0.35rem;
		align-items: center;
	}

	.rule-image {
		flex-shrink: 0;
		max-width: 4.5rem;
		max-height: 4.5rem;
		object-fit: contain;
		border-radius: 0.25rem;
	}

	.rule-container.image-top .rule-image {
		max-width: 100%;
		max-height: 7rem;
		align-self: center;
	}

	.rule-text {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		min-width: 0;
	}

	.rule-container-title {
		margin: 0;
		font-size: 0.9rem;
		font-weight: 700;
		color: #fff;
	}

	.rule-container-text {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.5;
		color: rgba(255, 255, 255, 0.82);
		white-space: pre-line;
	}

	@media (orientation: portrait) {
		.rule-section {
			padding: 0.6rem 0.35rem;
			border-radius: 0.35rem;
		}

		.rule-grid {
			grid-template-columns: 1fr !important;
			grid-template-rows: none !important;
			gap: 0.5rem;
		}

		.rule-container {
			grid-column: auto !important;
			grid-row: auto !important;
			width: 100%;
			padding: 0.6rem 0.65rem;
		}

		.rule-container.image-left {
			flex-direction: row;
			align-items: center;
			text-align: left;
			gap: 0.85rem;
		}

		.rule-container.image-left .rule-images {
			flex-shrink: 0;
			max-width: 22%;
		}

		/* Modifier reel rows: stack multiplier cards vertically for legibility */
		.rule-container.image-left:has(.rule-images) {
			flex-direction: column;
			align-items: stretch;
			text-align: left;
			gap: 0.75rem;
		}

		.rule-container.image-left:has(.rule-images) .rule-images {
			flex-direction: column;
			align-items: center;
			max-width: 100%;
			width: 100%;
			gap: 0.65rem;
		}

		.rule-container.image-left:has(.rule-images) .rule-image {
			width: 5.75rem;
			height: 5.75rem;
			max-width: 55%;
			max-height: 5.75rem;
		}

		.rule-image {
			width: 3.5rem;
			height: 3.5rem;
			max-width: 18%;
			max-height: 3.5rem;
			object-fit: contain;
		}

		.rule-container.image-top {
			align-items: center;
			text-align: center;
		}

		.rule-container.image-top .rule-image {
			width: auto;
			max-width: 8.5rem;
			max-height: 8.5rem;
		}

		.rule-container.image-top .rule-text {
			width: 100%;
			text-align: left;
		}

		.rule-text {
			flex: 1;
			min-width: 0;
		}

		.rule-container-title {
			font-size: 15px;
		}

		.rule-container-text {
			font-size: 14px;
			line-height: 1.45;
		}

		.rule-section-title {
			font-size: 13px;
		}
	}

	@media (max-width: 500px) and (orientation: landscape) {
		.rule-section-title {
			font-size: 13px;
		}

		.rule-container-title {
			font-size: 15px;
		}

		.rule-container-text {
			font-size: 14px;
			line-height: 1.6;
		}

		.rule-container.image-left {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.rule-container.image-left .rule-text {
			width: 100%;
		}
	}
</style>
