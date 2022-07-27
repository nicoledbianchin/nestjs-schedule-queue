import { Injectable } from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { InjectModel } from '@nestjs/sequelize';
import { Tweet } from '../entities/tweet.entity';

@Injectable()
export class TweetsCountService {

    constructor(@InjectModel(Tweet) private tweetModel: typeof Tweet) {
    }

    @Interval(5000)
    async countTweets() {
        const tweets = this.tweetModel.findAll({
            offset: 0,
            limit: 10
        });
    }
}
