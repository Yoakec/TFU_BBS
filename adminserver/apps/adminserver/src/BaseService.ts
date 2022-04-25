import { Repository, DeleteResult, SaveOptions, FindConditions, RemoveOptions, DeepPartial } from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { Injectable } from "@nestjs/common";

export interface ObjectLiteral {
    [key: string]: any;
}

/**
 * baseService类
 */

@Injectable()
export class BaseService<Entity extends ObjectLiteral> {  

    protected readonly repository: Repository<Entity>;

    constructor(repository: Repository<Entity>) {
        this.repository = repository;
    }

    async create <T extends DeepPartial<Entity>>(entity: T, options?: SaveOptions & {
        reload: false;
    }): Promise<T> {
        return this.repository.save(entity, options);
    }

    async saveMany <T extends DeepPartial<Entity>>(entities: T[],options?: SaveOptions & {
        reload: false;
    }): Promise<T[]> {
        return this.repository.save(entities, options);
    }

    async findOne(options?: FindConditions<Entity>): Promise<Entity> {
        return this.repository.findOne(options);
    }

    async findMany(options?: FindConditions<Entity>): Promise<Entity[]> {
        return this.repository.find(options);
    }

    async findAll(): Promise<Entity[]> {
        return this.repository.find();
    }

    async removeOne(entity: Entity, options?: RemoveOptions): Promise<Entity> {
        return this.repository.remove(entity, options);
    }

    async removeMany(entities: Entity[], options?: RemoveOptions): Promise<Entity[]> {
        return this.repository.remove(entities, options);
    }

    async delete(options?: FindConditions<Entity>): Promise<DeleteResult> {
        return this.repository.delete(options);
    }

    async update(conditions: number | FindConditions<Entity>, newValue: QueryDeepPartialEntity<Entity>): Promise<number> {
        let updateResult = 1;
        await this.repository.update(conditions, newValue).catch(e => updateResult = 0);
        return updateResult;
    }
}
