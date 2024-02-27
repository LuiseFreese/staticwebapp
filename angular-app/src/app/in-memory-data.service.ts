/**
 * Hero-oriented InMemoryDbService with method overrides.
 */
import { Injectable } from '@angular/core';
import {
  ParsedRequestUrl,
  RequestInfo,
  RequestInfoUtilities,
} from 'angular-in-memory-web-api';

/** In-memory database data */
interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService {
  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;

  /** In-memory database data */
  db: Db = {};

  /** Create the in-memory database on start or by command */
  createDb(reqInfo?: RequestInfo) {
    this.db = getDbData();

    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        // tslint:disable-next-line:forin
        for (const coll in this.db) {
          this.db[coll].length = 0;
        }
      }

      this.active = !!body.active;
    }
    return this.db;
  }

  /**
   * Override `parseRequestUrl`
   * Manipulates the request URL or the parsed result.
   * If in-mem is inactive, clear collectionName so that service passes request thru.
   * If in-mem is active, after parsing with the default parser,
   * @param url from request URL
   * @param utils for manipulating parsed URL
   */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const parsed = utils.parseRequestUrl(url);
    parsed.collectionName = this.active
      ? mapCollectionName(parsed.collectionName)
      : undefined;
    return parsed;
  }
}

/**
 * Remap a known singular collection name ("hero")
 * to the plural collection name ("heroes"); else return the name
 * @param name - collection name from the parsed URL
 */
function mapCollectionName(name: string): string {
  return (
    ({
      hero: 'heroes',
      villain: 'villains',
    } as any)[name] || name
  );
}

/**
 * Development data
 */
function getDbData() {
  const ingredients: any[] = [
    {
      id: 10,
      name: '🫚 Ginger',
      description: '1kg of preferably organic ginger, cut into slices that your blender can handle',
      quantity: '1',
    },
    {
      id: 20,
      name: '🍋 Lemon juice',
      description: 'squeeze 2 lemons, take care to not include seeds',
      quantity: 2,
    },
    {
      id: 30,
      name: '🍊 Orange juice',
      description: '300ml of freshly squeezed orange juice',
      quantity: 1,
    },
    {
      id: 40,
      name: '🤌 Kurkuma',
      description: '2 teaspoons of kurkuma powder',
      quantity: 1,
    },
    {
      id: 50,
      name: '➕ Add a little spice: some pepper',
      description: 'goes well with Kurkuma'
      quantity: 1,
    },
    {
      id: 60,
      name: '🍯 Honey',
      description: 'a few Tablespoons of honey will take away the bitterness of the Kurkuma',
      quantity: 1,
    },
  ];
  return { products } as Db;
}
