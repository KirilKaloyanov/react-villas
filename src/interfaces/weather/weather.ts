type degree = "C" | "F";
type temperature = {
  Value: number;
  Unit: degree;
};
type icon = {
  Icon: number;
  IconPhrase: string;
};

interface IDailyForecast {
  EpochDate: number;
  Temperature: {
    Minimum: temperature;
    Maximum: temperature;
  };
  Day: icon;
  Night: icon;
}

export interface IForecast {
  Headline: {
    EffectiveEpochDate: number;
    Text: string;
    Category: string;
  };
  DailyForecasts: IDailyForecast[];
}

export interface IWeather {
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  IsDayTime: boolean;
  Temperature: { Metric: temperature };
  CloudCover: number;
  Precip1hr: {
    Metric: {
      Value: number;
      Unit: string;
    };
  };
}
