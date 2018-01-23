import {BalanceSocket} from "../Balance/BalanceSocket"
import {BalanceStore} from "../Balance/BalanceStore"
import {AppSocket} from "../Sockets/socket"
import {BalanceOverviewStore} from "../BalanceOverview/BalanceOverviewStore"
import {CandleSocket} from "../Candle/CandleSocket"
import {PairSocket} from "../Pair/PairSocket"
import {CandleStore} from "../Candle/CandleStore"
import {CandleSizeStore, UNIT_MINUTE} from "../Candle/CandleSize/CandleSizeStore"
import {CandleStorageSocket} from "../Candle/Storage/CandleStorageSocket"
import {CandleStorageStore} from "../Candle/Storage/CandleStorageStore"
import {MarketSocket} from "../Market/MarketSocket"
import {MarketStore} from "../Market/MarketStore"
import {OrdersSocket} from "../Orders/OrderSocket"
import {OrderStore} from "../Orders/OrderStore"
import {OrderStorageSocket} from "../Orders/Storage/OrderStorageSocket"
import {OrderStorageStore} from "../Orders/Storage/OrderStorageStore"
import {PairStore} from "../Pair/PairStore"
import {SimulationModeStore} from "../SimulationMode/SimulationModeStore"
import {StrategyRunnerStore} from "../Strategy/StrategyRunnerStore"
import {StrategyStore} from "../Strategy/StrategyStore"
import {FilterStore} from "../TopFilter/FilterStore"
import {StatusIndicatorStore} from "../Sockets/StatusIndicator/StatusIndicatorStore"
import {StrategySocket} from "../Strategy/StrategySocket"

const url = process.env.REACT_APP_BACKEND_SOCKET_URL
const socketio = require('socket.io-client')(url)

// Socket
const appSocketInstance = new AppSocket(socketio)
const statusIndicatorStoreInstance = new StatusIndicatorStore(appSocketInstance)

// Balance
const balanceSocketInstance: BalanceSocket = new BalanceSocket(appSocketInstance)
const balanceStoreInstance: BalanceStore = new BalanceStore(balanceSocketInstance)
const balanceOverviewStoreInstance: BalanceOverviewStore = new BalanceOverviewStore()

// Candle
const candleSocketInstance: CandleSocket = new CandleSocket(appSocketInstance)
const candleStoreInstance: CandleStore = new CandleStore(candleSocketInstance)
const candleSizeStoreInstance: CandleSizeStore = new CandleSizeStore(UNIT_MINUTE, 15)
const candleStorageSocketInstance: CandleStorageSocket = new CandleStorageSocket(appSocketInstance)
const candleStorageStoreInstance: CandleStorageStore = new CandleStorageStore(candleStorageSocketInstance)

// Market
const marketSocketInstance: MarketSocket = new MarketSocket(appSocketInstance)
const marketStoreInstance: MarketStore = new MarketStore(marketSocketInstance)


// Orders
const orderSocketInstance: OrdersSocket = new OrdersSocket(appSocketInstance)
const orderStoreInstance: OrderStore = new OrderStore(orderSocketInstance)
const orderStorageSocketInstance: OrderStorageSocket = new OrderStorageSocket(appSocketInstance)
const orderStorageStoreInstance: OrderStorageStore = new OrderStorageStore(orderStorageSocketInstance)

// Pair
const pairSocketInstance: PairSocket = new PairSocket(appSocketInstance)
const pairStoreInstance: PairStore = new PairStore(pairSocketInstance)

// Simulation Mode
const simulationModeStoreInstance: SimulationModeStore = new SimulationModeStore()

// TopFilter
const filterStoreInstance: FilterStore = new FilterStore()

// Strategy
const strategySocketInstance: StrategySocket = new StrategySocket(appSocketInstance)
const strategyStoreInstance: StrategyStore = new StrategyStore(strategySocketInstance)
const strategyRunnerStoreInstance = new StrategyRunnerStore(
  appSocketInstance,
  filterStoreInstance,
  strategyStoreInstance,
  marketStoreInstance
)


export {
  appSocketInstance,
  statusIndicatorStoreInstance,
  balanceSocketInstance,
  balanceStoreInstance,
  balanceOverviewStoreInstance,
  candleSocketInstance,
  candleStoreInstance,
  candleSizeStoreInstance,
  candleStorageSocketInstance,
  candleStorageStoreInstance,
  marketSocketInstance,
  marketStoreInstance,
  orderSocketInstance,
  orderStoreInstance,
  orderStorageSocketInstance,
  orderStorageStoreInstance,
  pairSocketInstance,
  pairStoreInstance,
  simulationModeStoreInstance,
  filterStoreInstance,
  strategySocketInstance,
  strategyStoreInstance,
  strategyRunnerStoreInstance,
}