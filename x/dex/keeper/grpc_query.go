package keeper

import (
	"example/x/dex/types"
)

var _ types.QueryServer = Keeper{}
