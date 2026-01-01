<template>
  <section class="timeline">
    <div class="ruler">
      <span class="ruler-label">{{ minYear }}</span>
      <span
        v-for="year in intermediateYears"
        :key="year"
        class="ruler-label intermediate"
        :style="{ left: getYearPosition(year) + '%' }"
      >
        {{ year }}
      </span>
      <span class="ruler-label">{{ maxYear }}</span>
    </div>

    <div class="tracks">
      <div class="track">
        <div class="track-label">Solfège</div>
        <div class="track-bars">
          <div
            v-for="(it, idx) in solfegeItems"
            :key="idx"
            class="bar solfege"
            :style="{
              left: it.left + '%',
              width: it.width + '%',
              top: (7 + it.row * 44) + 'px'
            }"
          >
            <div class="bar-content">{{ extractShortTitle(it.title) }}</div>
            <div class="bar-tooltip">
              <div class="tooltip-title">{{ it.title }}</div>
              <div class="tooltip-date">{{ it.date }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="track">
        <div class="track-label">Instrument</div>
        <div class="track-bars">
          <div
            v-for="(it, idx) in instrumentItems"
            :key="idx"
            class="bar instrument"
            :style="{
              left: it.left + '%',
              width: it.width + '%',
              top: (7 + it.row * 44) + 'px'
            }"
          >
            <div class="bar-content">{{ extractShortTitle(it.title) }}</div>
            <div class="bar-tooltip">
              <div class="tooltip-title">{{ it.title }}</div>
              <div class="tooltip-date">{{ it.date }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="track">
        <div class="track-label">Groupe</div>
        <div class="track-bars">
          <div
            v-for="(it, idx) in groupeItems"
            :key="idx"
            class="bar groupe"
            :style="{
              left: it.left + '%',
              width: it.width + '%',
              top: (7 + it.row * 44) + 'px'
            }"
          >
            <div class="bar-content">{{ extractShortTitle(it.title) }}</div>
            <div class="bar-tooltip">
              <div class="tooltip-title">{{ it.title }}</div>
              <div class="tooltip-date">{{ it.date }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ items: { type: Array, required: true } })

const currentYear = new Date().getFullYear()

function parseYears(dateStr) {
	const matches = Array.from(String(dateStr).matchAll(/(\d{2})-(\d{4})/g))

	if (matches.length >= 2) {
		const startMonth = parseInt(matches[0][1], 10)
		const startYear = parseInt(matches[0][2], 10)
		const endMonth = parseInt(matches[1][1], 10)
		const endYear = parseInt(matches[1][2], 10)

		const start = startYear + (startMonth - 1) / 12
		const end = endYear + (endMonth - 1) / 12

		return { start, end }
	}

	if (matches.length === 1) {
		const year = parseInt(matches[0][2], 10)
		const month = parseInt(matches[0][1], 10)
		const decimal = year + (month - 1) / 12
		return { start: decimal, end: decimal }
	}

	return { start: currentYear, end: currentYear }
}

const parsedItems = computed(() => {
	const raw = (props.items || []).map((it) => {
		const { start, end } = parseYears(it.date)
		return { ...it, start, end }
	})

	if (raw.length === 0) return []

	const min = Math.min(...raw.map(r => r.start))
	const max = Math.max(...raw.map(r => r.end))
	const span = max - min

	const sorted = raw.sort((a, b) => a.start - b.start)

	const itemsWithPositions = []
	const typeRows = { solfege: [], instrument: [], groupe: [] }

	sorted.forEach((r) => {
		const left = ((r.start - min) / span) * 100
		const width = ((r.end - r.start) / span) * 100

		const rows = typeRows[r.type]
		let rowIndex = 0

		// Chercher une ligne où cet élément peut s'insérer sans chevauchement
		for (let i = 0; i < rows.length; i++) {
		if (left >= rows[i] + 0.5) { // +0.5 pour un petit espace entre les barres
			rowIndex = i
			break
		}
		rowIndex = i + 1
		}

		if (rowIndex >= rows.length) {
		rows.push(0)
		}

		rows[rowIndex] = left + width

		itemsWithPositions.push({
		...r,
		left,
		width,
		row: rowIndex
		})
	})

	return itemsWithPositions
})

function extractShortTitle(title) {
	const parts = title.split('—')
	return parts[0].trim()
}

const solfegeItems = computed(() => parsedItems.value.filter(it => it.type === 'solfege'))
const instrumentItems = computed(() => parsedItems.value.filter(it => it.type === 'instrument'))
const groupeItems = computed(() => parsedItems.value.filter(it => it.type === 'groupe'))

const minYear = computed(() => {
	if (!parsedItems.value.length) return 2007
	return Math.floor(Math.min(...parsedItems.value.map(r => r.start)))
})

const maxYear = computed(() => {
	if (!parsedItems.value.length) return currentYear
	return Math.ceil(Math.max(...parsedItems.value.map(r => r.end)))
})

const intermediateYears = computed(() => {
	const min = minYear.value
	const max = maxYear.value
	const span = max - min
	const years = []

	const step = span > 15 ? 5 : 3

	for (let year = min + step; year < max; year += step) {
		years.push(year)
	}

	return years
})

function getYearPosition(year) {
	const min = minYear.value
	const max = maxYear.value
	const span = max - min
	return ((year - min) / span) * 100
}
</script>

<style scoped>
.timeline {
  position: relative;
  padding: 12px 8px 24px;

  .ruler {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 16px;
    padding: 0 120px 0 0;

    .ruler-label {
      font-weight: 600;
    }
  }

  .tracks {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .track {
      display: flex;
      align-items: stretch;
      gap: 12px;
      min-height: 50px;

      .track-label {
        width: 100px;
        flex-shrink: 0;
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-secondary);
        display: flex;
        align-items: center;
      }

      .track-bars {
        position: relative;
        flex: 1;
        min-height: 50px;
        border-left: 2px solid rgba(255, 255, 255, 0.1);

        .bar {
          position: absolute;
          height: 36px;
          border-radius: 6px;
          padding: 0 12px;
          color: var(--text-button);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-sizing: border-box;
          opacity: 0.92;
          transition: all 0.25s ease;

          &:hover {
            opacity: 1;
            transform: translateY(-3px);
            z-index: 10;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);

            .bar-tooltip {
              opacity: 1;
              visibility: visible;
              transform: translateY(-8px);
            }
          }

          .bar-content {
            font-size: 0.85rem;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .bar-tooltip {
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(0);
            background: rgba(20, 20, 25, 0.98);
            padding: 12px 16px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.25s ease;
            white-space: nowrap;
            z-index: 100;
            pointer-events: none;
            border: 1px solid rgba(255, 255, 255, 0.1);

            &::after {
              content: '';
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              border: 6px solid transparent;
              border-top-color: rgba(20, 20, 25, 0.98);
            }

            .tooltip-title {
              font-weight: 600;
              font-size: 0.95rem;
              margin-bottom: 4px;
              color: #fff;
            }

            .tooltip-date {
              font-size: 0.85rem;
              color: rgba(255, 255, 255, 0.7);
            }
          }

          &.solfege {
            background: linear-gradient(90deg, var(--accent), #b91a23);
          }

          &.instrument {
            background: linear-gradient(90deg, #6a8fbf, #466b9a);
          }

          &.groupe {
            background: linear-gradient(90deg, #8fbf6a, #5a9a3f);
          }
        }
      }
    }
  }
}
</style>
