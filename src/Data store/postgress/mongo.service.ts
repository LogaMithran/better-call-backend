import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoService {

  getMongoUrl() {
    return "mongodb+srv://mithran-admin:TVCGyziPMXcGUmsE@portfolio-cluster.arwm86x.mongodb.net/?retryWrites=true&w=majority"
  }
}