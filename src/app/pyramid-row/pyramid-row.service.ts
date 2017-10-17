import { Injectable } from '@angular/core';

import { Animal } from '../animal.model';
import { PyramidRow } from './pyramid-row.model';

@Injectable()
export class PyramidRowService {
  constructor() { }

  getPyramidRows(): PyramidRow[] {
    return [
      new PyramidRow([
        new Animal('Shark', 1, 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tibur%C3%B3n.jpg'),
		new Animal('Lion', 1, 'https://oceanparadise.com/wp-content/uploads/2013/09/Lion-013-2048x2048-300x300.jpg'),
        new Animal('Hawk', 1, 'http://cdn.southcarolinaradionetwork.com/wp-content/uploads/2014/08/hawk-300x300.jpg')
      ], 1),
      new PyramidRow([
        new Animal('Fox', 2, 'http://michigantoday.umich.edu/wp-content/uploads/2017/01/talking-books-fox-2-17-300x300.jpg'),
        new Animal('Owl', 2, 'https://upload.wikimedia.org/wikipedia/commons/3/39/Athene_noctua_%28cropped%29.jpg'),
		 new Animal('Wolf', 2, 'https://www.fws.gov/director/dan-ashe/images/wolf5.jpg')
      ], 2),
      new PyramidRow([
        new Animal('Snake', 3, 'https://upload.wikimedia.org/wikipedia/commons/7/70/Crotalus_cerastes_mesquite_springs_CA-2.jpg'),
        new Animal('Scorpion', 3, 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Scorpion_Photograph_By_Shantanu_Kuveskar.jpg'),
        new Animal('Mongoose', 3, 'http://kidszoo.org/wp-content/uploads/Mongoose-Single-for-Blog-300x300.jpg')
      ], 3),
      new PyramidRow([
        new Animal('Rabbit', 4, 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Rabbit_in_montana.jpg'),
        new Animal('Squirrel', 4, 'http://thercs.net/eldar/squirrel/Eastern-Gray-Squirrel2-300x300.jpg'),
        new Animal('Rat', 4, 'http://cmcanimalcontrol.com/wp-content/uploads/2016/03/mr-300x300.jpg')
      ], 4),
      new PyramidRow([
        new Animal('Grasshopper', 5, 'http://www.bigfive.com/wp-content/uploads/2016/11/Costa-Rica-Grasshopper-300x300.jpg'),
        new Animal('LadyBug', 5, 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Coccinella_magnifica01.jpg'),
        new Animal('Fire Ant', 5, 'https://upload.wikimedia.org/wikipedia/commons/9/94/Fire_ants_01.jpg')
      ], 5)
    ];
  }
}
