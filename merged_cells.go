package xlsx

import (
	"errors"
	"fmt"
	"github.com/plandem/xlsx/internal/ml"
	"github.com/plandem/xlsx/types"
)

type mergedCells struct {
	sheet *sheetInfo
}

//newMergedCells creates an object that implements merged cells functionality
func newMergedCells(sheet *sheetInfo) *mergedCells {
	return &mergedCells{
		sheet: sheet,
	}
}

//Resolve check if requested cIdx and rIdx related to merged range and if so, then translate indexes to valid values
func (m *mergedCells) Resolve(cIdx, rIdx int) (int, int, bool) {
	merged := false

	if m.sheet.ml.MergeCells != nil {
		mergedCells := *m.sheet.ml.MergeCells
		if len(mergedCells) > 0 {
			for _, mc := range mergedCells {
				if merged = mc.Bounds.Contains(cIdx, rIdx); merged {
					cIdx, rIdx = mc.Bounds.FromCol, mc.Bounds.FromRow
					break
				}
			}
		}
	}

	return cIdx, rIdx, merged
}

//Merge adds a merged cells info for bounds
func (m *mergedCells) Add(bounds types.Bounds) error {
	//let's check existing merged cells for overlapping
	if m.sheet.ml.MergeCells != nil {
		mergedCells := *m.sheet.ml.MergeCells
		if len(mergedCells) > 0 {
			for _, mc := range mergedCells {
				if mc.Bounds.Overlaps(bounds) {
					return errors.New(fmt.Sprintf("intersection of different merged ranges is not allowed, %s intersects with %s", mc.Bounds, bounds))
				}
			}
		}
	}

	//looks like there are no any merged cells in that area, so let's add it
	*m.sheet.ml.MergeCells = append(*m.sheet.ml.MergeCells, &ml.MergeCell{
		Bounds: bounds,
	})

	return nil
}

//Remove removes merged cells info for bounds
func (m *mergedCells) Remove(bounds types.Bounds) {
	if m.sheet.ml.MergeCells != nil {
		mergedCells := *m.sheet.ml.MergeCells
		if len(mergedCells) > 0 {
			newMergedCells := make([]*ml.MergeCell, 0, len(*m.sheet.ml.MergeCells))

			for _, mc := range mergedCells {
				if !mc.Bounds.Overlaps(bounds) {
					//copy only non overlapping bounds
					newMergedCells = append(newMergedCells, mc)
				}
			}

			*m.sheet.ml.MergeCells = newMergedCells
		}
	}
}
