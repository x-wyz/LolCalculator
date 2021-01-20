import React from 'react';

import Key1 from '../../assets/runes/reskey1.png';
import Key2 from '../../assets/runes/reskey2.png';
import Key3 from '../../assets/runes/reskey3.png';

import Minor1 from '../../assets/runes/res1.png';
import Minor2 from '../../assets/runes/res2.png';
import Minor3 from '../../assets/runes/res3.png';
import Minor4 from '../../assets/runes/res4.png';
import Minor5 from '../../assets/runes/res5.png';
import Minor6 from '../../assets/runes/res6.png';
import Minor7 from '../../assets/runes/res7.png';
import Minor8 from '../../assets/runes/res8.png';
import Minor9 from '../../assets/runes/res9.png';

const RuneResolve = ({ currentrunes, updateRuneStatus }) => {
	return (
		<section className="rune-section">
			<h2 className="rune-tree-header"> Resolve </h2>
			<div className="rune-keystones-row">
				<div className={`keystone ${currentrunes.resolve.key1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'key1')}>
					<img className="keystone-image" src={Key1} />
					<p className="keystone-name">Grasp</p>
				</div>
				<div className={`keystone ${currentrunes.resolve.key2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'key2')}>
					<img className="keystone-image" src={Key2} />
					<p className="keystone-name">Aftershock</p>
				</div>
				<div className={`keystone ${currentrunes.resolve.key3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'key3')}>
					<img className="keystone-image" src={Key3} />
					<p className="keystone-name">Guardian</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.resolve.node1 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node1')}>
					<img className="minor-image" src={Minor1} />
					<p className="minor-name">Demolish</p>
				</div>
				<div className={`minor ${currentrunes.resolve.node2 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node2')}>
					<img className="minor-image" src={Minor2} />
					<p className="minor-name">Font of Life</p>
				</div>
				<div className={`minor ${currentrunes.resolve.node3 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node3')}>
					<img className="minor-image" src={Minor3} />
					<p className="minor-name">Shield Bash</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.resolve.node4 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node4')}>
					<img className="minor-image" src={Minor4} />
					<p className="minor-name">Conditioning</p>
				</div>
				<div className={`minor ${currentrunes.resolve.node5 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node5')}>
					<img className="minor-image" src={Minor5} />
					<p className="minor-name">Second Wind</p>
				</div>
				<div className={`minor ${currentrunes.resolve.node6 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node6')}>
					<img className="minor-image" src={Minor6} />
					<p className="minor-name">Bone Plating</p>
				</div>
			</div>
			<div className="minor-runes-row">
				<div className={`minor ${currentrunes.resolve.node7 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node7')}>
					<img className="minor-image" src={Minor7} />
					<p className="minor-name">Overgrowth</p>
				</div>
				<div className={`minor ${currentrunes.resolve.node8 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node8')}>
					<img className="minor-image" src={Minor8} />
					<p className="minor-name">Revitalize</p>
				</div>
				<div className={`minor ${currentrunes.resolve.node9 ? "rune-active" : "rune-inactive"}`} onClick={() => updateRuneStatus('resolve', 'node9')}>
					<img className="minor-image" src={Minor9} />
					<p className="minor-name">Unflinching</p>
				</div>
			</div>
		</section>
	)
}

export default RuneResolve;
