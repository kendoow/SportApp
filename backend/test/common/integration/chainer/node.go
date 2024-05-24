package chainer

type Chain struct {
	Nodes []NodeBefore
}

func (chain *Chain) before() {
	for _, opt := range chain.Nodes {
		opt()
	}
}

type NodeBefore func()
