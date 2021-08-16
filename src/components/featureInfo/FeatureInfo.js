import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './featureinfo.css';
export default function featureInfo(){
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">MMK 30000</span>
                    <span className="featuredMoneyRate">
                        -10 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">MMK 5000</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Total</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">MMK 25000</span>
                    <span className="featuredMoneyRate">
                        +1 <ArrowUpwardIcon className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    )
}