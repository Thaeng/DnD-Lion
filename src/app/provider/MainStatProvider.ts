import { MainStat } from '../../stats/entity/MainStat';
import { MainStatEnum } from '../../stats/factory/MainStatEnum';
import { MainStatFactory} from '../../stats/factory/MainStatFactory';

export class MainStatProvider {

    private static instance: MainStatProvider;
    private static mainStats: MainStat[];

    private constructor(){}

    public static getInstance(): MainStatProvider {
        if (MainStatProvider.instance === null || MainStatProvider.instance === undefined){
            MainStatProvider.instance = new MainStatProvider();
            MainStatProvider.initMainStats();
        }
        return MainStatProvider.instance;
    }

    private static initMainStats(): void {
        MainStatProvider.mainStats =
            Object.keys(MainStatEnum).map(mainstatenum => MainStatFactory.getInstance().buildMainStat(MainStatEnum[mainstatenum], 15));
    }

    public get(): MainStat[] {
        return MainStatProvider.mainStats;
    }

}
