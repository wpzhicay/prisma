
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Carrera
 * 
 */
export type Carrera = $Result.DefaultSelection<Prisma.$CarreraPayload>
/**
 * Model Estudiante
 * 
 */
export type Estudiante = $Result.DefaultSelection<Prisma.$EstudiantePayload>
/**
 * Model Profesor
 * 
 */
export type Profesor = $Result.DefaultSelection<Prisma.$ProfesorPayload>
/**
 * Model Materia
 * 
 */
export type Materia = $Result.DefaultSelection<Prisma.$MateriaPayload>
/**
 * Model Curso
 * 
 */
export type Curso = $Result.DefaultSelection<Prisma.$CursoPayload>
/**
 * Model Titulo
 * 
 */
export type Titulo = $Result.DefaultSelection<Prisma.$TituloPayload>
/**
 * Model Inscripcion
 * 
 */
export type Inscripcion = $Result.DefaultSelection<Prisma.$InscripcionPayload>
/**
 * Model Periodo
 * 
 */
export type Periodo = $Result.DefaultSelection<Prisma.$PeriodoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Carreras
 * const carreras = await prisma.carrera.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Carreras
   * const carreras = await prisma.carrera.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.carrera`: Exposes CRUD operations for the **Carrera** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carreras
    * const carreras = await prisma.carrera.findMany()
    * ```
    */
  get carrera(): Prisma.CarreraDelegate<ExtArgs>;

  /**
   * `prisma.estudiante`: Exposes CRUD operations for the **Estudiante** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiante.findMany()
    * ```
    */
  get estudiante(): Prisma.EstudianteDelegate<ExtArgs>;

  /**
   * `prisma.profesor`: Exposes CRUD operations for the **Profesor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesors
    * const profesors = await prisma.profesor.findMany()
    * ```
    */
  get profesor(): Prisma.ProfesorDelegate<ExtArgs>;

  /**
   * `prisma.materia`: Exposes CRUD operations for the **Materia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materias
    * const materias = await prisma.materia.findMany()
    * ```
    */
  get materia(): Prisma.MateriaDelegate<ExtArgs>;

  /**
   * `prisma.curso`: Exposes CRUD operations for the **Curso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.curso.findMany()
    * ```
    */
  get curso(): Prisma.CursoDelegate<ExtArgs>;

  /**
   * `prisma.titulo`: Exposes CRUD operations for the **Titulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Titulos
    * const titulos = await prisma.titulo.findMany()
    * ```
    */
  get titulo(): Prisma.TituloDelegate<ExtArgs>;

  /**
   * `prisma.inscripcion`: Exposes CRUD operations for the **Inscripcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripcions
    * const inscripcions = await prisma.inscripcion.findMany()
    * ```
    */
  get inscripcion(): Prisma.InscripcionDelegate<ExtArgs>;

  /**
   * `prisma.periodo`: Exposes CRUD operations for the **Periodo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periodos
    * const periodos = await prisma.periodo.findMany()
    * ```
    */
  get periodo(): Prisma.PeriodoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Carrera: 'Carrera',
    Estudiante: 'Estudiante',
    Profesor: 'Profesor',
    Materia: 'Materia',
    Curso: 'Curso',
    Titulo: 'Titulo',
    Inscripcion: 'Inscripcion',
    Periodo: 'Periodo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "carrera" | "estudiante" | "profesor" | "materia" | "curso" | "titulo" | "inscripcion" | "periodo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Carrera: {
        payload: Prisma.$CarreraPayload<ExtArgs>
        fields: Prisma.CarreraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarreraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarreraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findFirst: {
            args: Prisma.CarreraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarreraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          findMany: {
            args: Prisma.CarreraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          create: {
            args: Prisma.CarreraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          createMany: {
            args: Prisma.CarreraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarreraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>[]
          }
          delete: {
            args: Prisma.CarreraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          update: {
            args: Prisma.CarreraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          deleteMany: {
            args: Prisma.CarreraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarreraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarreraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarreraPayload>
          }
          aggregate: {
            args: Prisma.CarreraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrera>
          }
          groupBy: {
            args: Prisma.CarreraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarreraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarreraCountArgs<ExtArgs>
            result: $Utils.Optional<CarreraCountAggregateOutputType> | number
          }
        }
      }
      Estudiante: {
        payload: Prisma.$EstudiantePayload<ExtArgs>
        fields: Prisma.EstudianteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudianteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudianteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findFirst: {
            args: Prisma.EstudianteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudianteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          findMany: {
            args: Prisma.EstudianteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          create: {
            args: Prisma.EstudianteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          createMany: {
            args: Prisma.EstudianteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstudianteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>[]
          }
          delete: {
            args: Prisma.EstudianteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          update: {
            args: Prisma.EstudianteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          deleteMany: {
            args: Prisma.EstudianteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstudianteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstudianteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstudiantePayload>
          }
          aggregate: {
            args: Prisma.EstudianteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante>
          }
          groupBy: {
            args: Prisma.EstudianteGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstudianteGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudianteCountArgs<ExtArgs>
            result: $Utils.Optional<EstudianteCountAggregateOutputType> | number
          }
        }
      }
      Profesor: {
        payload: Prisma.$ProfesorPayload<ExtArgs>
        fields: Prisma.ProfesorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findFirst: {
            args: Prisma.ProfesorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          findMany: {
            args: Prisma.ProfesorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          create: {
            args: Prisma.ProfesorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          createMany: {
            args: Prisma.ProfesorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfesorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>[]
          }
          delete: {
            args: Prisma.ProfesorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          update: {
            args: Prisma.ProfesorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          deleteMany: {
            args: Prisma.ProfesorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfesorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesorPayload>
          }
          aggregate: {
            args: Prisma.ProfesorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesor>
          }
          groupBy: {
            args: Prisma.ProfesorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesorCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesorCountAggregateOutputType> | number
          }
        }
      }
      Materia: {
        payload: Prisma.$MateriaPayload<ExtArgs>
        fields: Prisma.MateriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findFirst: {
            args: Prisma.MateriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          findMany: {
            args: Prisma.MateriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          create: {
            args: Prisma.MateriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          createMany: {
            args: Prisma.MateriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MateriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>[]
          }
          delete: {
            args: Prisma.MateriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          update: {
            args: Prisma.MateriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          deleteMany: {
            args: Prisma.MateriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MateriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MateriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MateriaPayload>
          }
          aggregate: {
            args: Prisma.MateriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMateria>
          }
          groupBy: {
            args: Prisma.MateriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MateriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriaCountArgs<ExtArgs>
            result: $Utils.Optional<MateriaCountAggregateOutputType> | number
          }
        }
      }
      Curso: {
        payload: Prisma.$CursoPayload<ExtArgs>
        fields: Prisma.CursoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CursoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CursoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findFirst: {
            args: Prisma.CursoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CursoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          findMany: {
            args: Prisma.CursoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          create: {
            args: Prisma.CursoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          createMany: {
            args: Prisma.CursoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CursoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>[]
          }
          delete: {
            args: Prisma.CursoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          update: {
            args: Prisma.CursoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          deleteMany: {
            args: Prisma.CursoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CursoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CursoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CursoPayload>
          }
          aggregate: {
            args: Prisma.CursoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurso>
          }
          groupBy: {
            args: Prisma.CursoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CursoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CursoCountArgs<ExtArgs>
            result: $Utils.Optional<CursoCountAggregateOutputType> | number
          }
        }
      }
      Titulo: {
        payload: Prisma.$TituloPayload<ExtArgs>
        fields: Prisma.TituloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TituloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TituloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          findFirst: {
            args: Prisma.TituloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TituloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          findMany: {
            args: Prisma.TituloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>[]
          }
          create: {
            args: Prisma.TituloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          createMany: {
            args: Prisma.TituloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TituloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>[]
          }
          delete: {
            args: Prisma.TituloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          update: {
            args: Prisma.TituloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          deleteMany: {
            args: Prisma.TituloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TituloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TituloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TituloPayload>
          }
          aggregate: {
            args: Prisma.TituloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTitulo>
          }
          groupBy: {
            args: Prisma.TituloGroupByArgs<ExtArgs>
            result: $Utils.Optional<TituloGroupByOutputType>[]
          }
          count: {
            args: Prisma.TituloCountArgs<ExtArgs>
            result: $Utils.Optional<TituloCountAggregateOutputType> | number
          }
        }
      }
      Inscripcion: {
        payload: Prisma.$InscripcionPayload<ExtArgs>
        fields: Prisma.InscripcionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InscripcionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InscripcionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findFirst: {
            args: Prisma.InscripcionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InscripcionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          findMany: {
            args: Prisma.InscripcionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          create: {
            args: Prisma.InscripcionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          createMany: {
            args: Prisma.InscripcionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InscripcionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>[]
          }
          delete: {
            args: Prisma.InscripcionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          update: {
            args: Prisma.InscripcionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          deleteMany: {
            args: Prisma.InscripcionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InscripcionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InscripcionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InscripcionPayload>
          }
          aggregate: {
            args: Prisma.InscripcionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripcion>
          }
          groupBy: {
            args: Prisma.InscripcionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InscripcionCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionCountAggregateOutputType> | number
          }
        }
      }
      Periodo: {
        payload: Prisma.$PeriodoPayload<ExtArgs>
        fields: Prisma.PeriodoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findFirst: {
            args: Prisma.PeriodoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          findMany: {
            args: Prisma.PeriodoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          create: {
            args: Prisma.PeriodoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          createMany: {
            args: Prisma.PeriodoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>[]
          }
          delete: {
            args: Prisma.PeriodoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          update: {
            args: Prisma.PeriodoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          deleteMany: {
            args: Prisma.PeriodoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeriodoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodoPayload>
          }
          aggregate: {
            args: Prisma.PeriodoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodo>
          }
          groupBy: {
            args: Prisma.PeriodoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodoCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CarreraCountOutputType
   */

  export type CarreraCountOutputType = {
    estudiantes: number
    materias: number
    profesores: number
  }

  export type CarreraCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | CarreraCountOutputTypeCountEstudiantesArgs
    materias?: boolean | CarreraCountOutputTypeCountMateriasArgs
    profesores?: boolean | CarreraCountOutputTypeCountProfesoresArgs
  }

  // Custom InputTypes
  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarreraCountOutputType
     */
    select?: CarreraCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * CarreraCountOutputType without action
   */
  export type CarreraCountOutputTypeCountProfesoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesorWhereInput
  }


  /**
   * Count Type EstudianteCountOutputType
   */

  export type EstudianteCountOutputType = {
    inscripciones: number
  }

  export type EstudianteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | EstudianteCountOutputTypeCountInscripcionesArgs
  }

  // Custom InputTypes
  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudianteCountOutputType
     */
    select?: EstudianteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstudianteCountOutputType without action
   */
  export type EstudianteCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }


  /**
   * Count Type ProfesorCountOutputType
   */

  export type ProfesorCountOutputType = {
    materias: number
    titulos: number
  }

  export type ProfesorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | ProfesorCountOutputTypeCountMateriasArgs
    titulos?: boolean | ProfesorCountOutputTypeCountTitulosArgs
  }

  // Custom InputTypes
  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesorCountOutputType
     */
    select?: ProfesorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
  }

  /**
   * ProfesorCountOutputType without action
   */
  export type ProfesorCountOutputTypeCountTitulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TituloWhereInput
  }


  /**
   * Count Type MateriaCountOutputType
   */

  export type MateriaCountOutputType = {
    cursos: number
  }

  export type MateriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | MateriaCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: MateriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MateriaCountOutputType without action
   */
  export type MateriaCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Count Type CursoCountOutputType
   */

  export type CursoCountOutputType = {
    inscripciones: number
  }

  export type CursoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | CursoCountOutputTypeCountInscripcionesArgs
  }

  // Custom InputTypes
  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CursoCountOutputType
     */
    select?: CursoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CursoCountOutputType without action
   */
  export type CursoCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
  }


  /**
   * Count Type PeriodoCountOutputType
   */

  export type PeriodoCountOutputType = {
    cursos: number
  }

  export type PeriodoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | PeriodoCountOutputTypeCountCursosArgs
  }

  // Custom InputTypes
  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodoCountOutputType
     */
    select?: PeriodoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodoCountOutputType without action
   */
  export type PeriodoCountOutputTypeCountCursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Carrera
   */

  export type AggregateCarrera = {
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  export type CarreraAvgAggregateOutputType = {
    id: number | null
  }

  export type CarreraSumAggregateOutputType = {
    id: number | null
  }

  export type CarreraMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    facultad: string | null
  }

  export type CarreraMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    facultad: string | null
  }

  export type CarreraCountAggregateOutputType = {
    id: number
    nombre: number
    facultad: number
    _all: number
  }


  export type CarreraAvgAggregateInputType = {
    id?: true
  }

  export type CarreraSumAggregateInputType = {
    id?: true
  }

  export type CarreraMinAggregateInputType = {
    id?: true
    nombre?: true
    facultad?: true
  }

  export type CarreraMaxAggregateInputType = {
    id?: true
    nombre?: true
    facultad?: true
  }

  export type CarreraCountAggregateInputType = {
    id?: true
    nombre?: true
    facultad?: true
    _all?: true
  }

  export type CarreraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrera to aggregate.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carreras
    **/
    _count?: true | CarreraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarreraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarreraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarreraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarreraMaxAggregateInputType
  }

  export type GetCarreraAggregateType<T extends CarreraAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrera]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrera[P]>
      : GetScalarType<T[P], AggregateCarrera[P]>
  }




  export type CarreraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarreraWhereInput
    orderBy?: CarreraOrderByWithAggregationInput | CarreraOrderByWithAggregationInput[]
    by: CarreraScalarFieldEnum[] | CarreraScalarFieldEnum
    having?: CarreraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarreraCountAggregateInputType | true
    _avg?: CarreraAvgAggregateInputType
    _sum?: CarreraSumAggregateInputType
    _min?: CarreraMinAggregateInputType
    _max?: CarreraMaxAggregateInputType
  }

  export type CarreraGroupByOutputType = {
    id: number
    nombre: string
    facultad: string
    _count: CarreraCountAggregateOutputType | null
    _avg: CarreraAvgAggregateOutputType | null
    _sum: CarreraSumAggregateOutputType | null
    _min: CarreraMinAggregateOutputType | null
    _max: CarreraMaxAggregateOutputType | null
  }

  type GetCarreraGroupByPayload<T extends CarreraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarreraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarreraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarreraGroupByOutputType[P]>
            : GetScalarType<T[P], CarreraGroupByOutputType[P]>
        }
      >
    >


  export type CarreraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    facultad?: boolean
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    profesores?: boolean | Carrera$profesoresArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    facultad?: boolean
  }, ExtArgs["result"]["carrera"]>

  export type CarreraSelectScalar = {
    id?: boolean
    nombre?: boolean
    facultad?: boolean
  }

  export type CarreraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | Carrera$estudiantesArgs<ExtArgs>
    materias?: boolean | Carrera$materiasArgs<ExtArgs>
    profesores?: boolean | Carrera$profesoresArgs<ExtArgs>
    _count?: boolean | CarreraCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarreraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarreraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrera"
    objects: {
      estudiantes: Prisma.$EstudiantePayload<ExtArgs>[]
      materias: Prisma.$MateriaPayload<ExtArgs>[]
      profesores: Prisma.$ProfesorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      facultad: string
    }, ExtArgs["result"]["carrera"]>
    composites: {}
  }

  type CarreraGetPayload<S extends boolean | null | undefined | CarreraDefaultArgs> = $Result.GetResult<Prisma.$CarreraPayload, S>

  type CarreraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarreraFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CarreraCountAggregateInputType | true
    }

  export interface CarreraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrera'], meta: { name: 'Carrera' } }
    /**
     * Find zero or one Carrera that matches the filter.
     * @param {CarreraFindUniqueArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarreraFindUniqueArgs>(args: SelectSubset<T, CarreraFindUniqueArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Carrera that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CarreraFindUniqueOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarreraFindUniqueOrThrowArgs>(args: SelectSubset<T, CarreraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Carrera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarreraFindFirstArgs>(args?: SelectSubset<T, CarreraFindFirstArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Carrera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindFirstOrThrowArgs} args - Arguments to find a Carrera
     * @example
     * // Get one Carrera
     * const carrera = await prisma.carrera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarreraFindFirstOrThrowArgs>(args?: SelectSubset<T, CarreraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Carreras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carreras
     * const carreras = await prisma.carrera.findMany()
     * 
     * // Get first 10 Carreras
     * const carreras = await prisma.carrera.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carreraWithIdOnly = await prisma.carrera.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarreraFindManyArgs>(args?: SelectSubset<T, CarreraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Carrera.
     * @param {CarreraCreateArgs} args - Arguments to create a Carrera.
     * @example
     * // Create one Carrera
     * const Carrera = await prisma.carrera.create({
     *   data: {
     *     // ... data to create a Carrera
     *   }
     * })
     * 
     */
    create<T extends CarreraCreateArgs>(args: SelectSubset<T, CarreraCreateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Carreras.
     * @param {CarreraCreateManyArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarreraCreateManyArgs>(args?: SelectSubset<T, CarreraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carreras and returns the data saved in the database.
     * @param {CarreraCreateManyAndReturnArgs} args - Arguments to create many Carreras.
     * @example
     * // Create many Carreras
     * const carrera = await prisma.carrera.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carreras and only return the `id`
     * const carreraWithIdOnly = await prisma.carrera.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarreraCreateManyAndReturnArgs>(args?: SelectSubset<T, CarreraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Carrera.
     * @param {CarreraDeleteArgs} args - Arguments to delete one Carrera.
     * @example
     * // Delete one Carrera
     * const Carrera = await prisma.carrera.delete({
     *   where: {
     *     // ... filter to delete one Carrera
     *   }
     * })
     * 
     */
    delete<T extends CarreraDeleteArgs>(args: SelectSubset<T, CarreraDeleteArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Carrera.
     * @param {CarreraUpdateArgs} args - Arguments to update one Carrera.
     * @example
     * // Update one Carrera
     * const carrera = await prisma.carrera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarreraUpdateArgs>(args: SelectSubset<T, CarreraUpdateArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Carreras.
     * @param {CarreraDeleteManyArgs} args - Arguments to filter Carreras to delete.
     * @example
     * // Delete a few Carreras
     * const { count } = await prisma.carrera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarreraDeleteManyArgs>(args?: SelectSubset<T, CarreraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carreras
     * const carrera = await prisma.carrera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarreraUpdateManyArgs>(args: SelectSubset<T, CarreraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carrera.
     * @param {CarreraUpsertArgs} args - Arguments to update or create a Carrera.
     * @example
     * // Update or create a Carrera
     * const carrera = await prisma.carrera.upsert({
     *   create: {
     *     // ... data to create a Carrera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrera we want to update
     *   }
     * })
     */
    upsert<T extends CarreraUpsertArgs>(args: SelectSubset<T, CarreraUpsertArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Carreras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraCountArgs} args - Arguments to filter Carreras to count.
     * @example
     * // Count the number of Carreras
     * const count = await prisma.carrera.count({
     *   where: {
     *     // ... the filter for the Carreras we want to count
     *   }
     * })
    **/
    count<T extends CarreraCountArgs>(
      args?: Subset<T, CarreraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarreraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarreraAggregateArgs>(args: Subset<T, CarreraAggregateArgs>): Prisma.PrismaPromise<GetCarreraAggregateType<T>>

    /**
     * Group by Carrera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarreraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarreraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarreraGroupByArgs['orderBy'] }
        : { orderBy?: CarreraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarreraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarreraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrera model
   */
  readonly fields: CarreraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrera.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarreraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiantes<T extends Carrera$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany"> | Null>
    materias<T extends Carrera$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany"> | Null>
    profesores<T extends Carrera$profesoresArgs<ExtArgs> = {}>(args?: Subset<T, Carrera$profesoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrera model
   */ 
  interface CarreraFieldRefs {
    readonly id: FieldRef<"Carrera", 'Int'>
    readonly nombre: FieldRef<"Carrera", 'String'>
    readonly facultad: FieldRef<"Carrera", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrera findUnique
   */
  export type CarreraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findUniqueOrThrow
   */
  export type CarreraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera findFirst
   */
  export type CarreraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findFirstOrThrow
   */
  export type CarreraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carrera to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carreras.
     */
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera findMany
   */
  export type CarreraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter, which Carreras to fetch.
     */
    where?: CarreraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carreras to fetch.
     */
    orderBy?: CarreraOrderByWithRelationInput | CarreraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carreras.
     */
    cursor?: CarreraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carreras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carreras.
     */
    skip?: number
    distinct?: CarreraScalarFieldEnum | CarreraScalarFieldEnum[]
  }

  /**
   * Carrera create
   */
  export type CarreraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrera.
     */
    data: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
  }

  /**
   * Carrera createMany
   */
  export type CarreraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera createManyAndReturn
   */
  export type CarreraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Carreras.
     */
    data: CarreraCreateManyInput | CarreraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrera update
   */
  export type CarreraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrera.
     */
    data: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
    /**
     * Choose, which Carrera to update.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera updateMany
   */
  export type CarreraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carreras.
     */
    data: XOR<CarreraUpdateManyMutationInput, CarreraUncheckedUpdateManyInput>
    /**
     * Filter which Carreras to update
     */
    where?: CarreraWhereInput
  }

  /**
   * Carrera upsert
   */
  export type CarreraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrera to update in case it exists.
     */
    where: CarreraWhereUniqueInput
    /**
     * In case the Carrera found by the `where` argument doesn't exist, create a new Carrera with this data.
     */
    create: XOR<CarreraCreateInput, CarreraUncheckedCreateInput>
    /**
     * In case the Carrera was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarreraUpdateInput, CarreraUncheckedUpdateInput>
  }

  /**
   * Carrera delete
   */
  export type CarreraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
    /**
     * Filter which Carrera to delete.
     */
    where: CarreraWhereUniqueInput
  }

  /**
   * Carrera deleteMany
   */
  export type CarreraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carreras to delete
     */
    where?: CarreraWhereInput
  }

  /**
   * Carrera.estudiantes
   */
  export type Carrera$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    cursor?: EstudianteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Carrera.materias
   */
  export type Carrera$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Carrera.profesores
   */
  export type Carrera$profesoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    where?: ProfesorWhereInput
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    cursor?: ProfesorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Carrera without action
   */
  export type CarreraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrera
     */
    select?: CarreraSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarreraInclude<ExtArgs> | null
  }


  /**
   * Model Estudiante
   */

  export type AggregateEstudiante = {
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  export type EstudianteAvgAggregateOutputType = {
    id: number | null
    carrera_id: number | null
  }

  export type EstudianteSumAggregateOutputType = {
    id: number | null
    carrera_id: number | null
  }

  export type EstudianteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    fecha_nacimiento: Date | null
    carrera_id: number | null
    apellido: string | null
  }

  export type EstudianteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    fecha_nacimiento: Date | null
    carrera_id: number | null
    apellido: string | null
  }

  export type EstudianteCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    fecha_nacimiento: number
    carrera_id: number
    apellido: number
    _all: number
  }


  export type EstudianteAvgAggregateInputType = {
    id?: true
    carrera_id?: true
  }

  export type EstudianteSumAggregateInputType = {
    id?: true
    carrera_id?: true
  }

  export type EstudianteMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    fecha_nacimiento?: true
    carrera_id?: true
    apellido?: true
  }

  export type EstudianteMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    fecha_nacimiento?: true
    carrera_id?: true
    apellido?: true
  }

  export type EstudianteCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    fecha_nacimiento?: true
    carrera_id?: true
    apellido?: true
    _all?: true
  }

  export type EstudianteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiante to aggregate.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudianteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudianteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudianteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudianteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudianteMaxAggregateInputType
  }

  export type GetEstudianteAggregateType<T extends EstudianteAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante[P]>
      : GetScalarType<T[P], AggregateEstudiante[P]>
  }




  export type EstudianteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudianteWhereInput
    orderBy?: EstudianteOrderByWithAggregationInput | EstudianteOrderByWithAggregationInput[]
    by: EstudianteScalarFieldEnum[] | EstudianteScalarFieldEnum
    having?: EstudianteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudianteCountAggregateInputType | true
    _avg?: EstudianteAvgAggregateInputType
    _sum?: EstudianteSumAggregateInputType
    _min?: EstudianteMinAggregateInputType
    _max?: EstudianteMaxAggregateInputType
  }

  export type EstudianteGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    fecha_nacimiento: Date
    carrera_id: number
    apellido: string
    _count: EstudianteCountAggregateOutputType | null
    _avg: EstudianteAvgAggregateOutputType | null
    _sum: EstudianteSumAggregateOutputType | null
    _min: EstudianteMinAggregateOutputType | null
    _max: EstudianteMaxAggregateOutputType | null
  }

  type GetEstudianteGroupByPayload<T extends EstudianteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudianteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudianteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
            : GetScalarType<T[P], EstudianteGroupByOutputType[P]>
        }
      >
    >


  export type EstudianteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    fecha_nacimiento?: boolean
    carrera_id?: boolean
    apellido?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    inscripciones?: boolean | Estudiante$inscripcionesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    fecha_nacimiento?: boolean
    carrera_id?: boolean
    apellido?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante"]>

  export type EstudianteSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    fecha_nacimiento?: boolean
    carrera_id?: boolean
    apellido?: boolean
  }

  export type EstudianteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    inscripciones?: boolean | Estudiante$inscripcionesArgs<ExtArgs>
    _count?: boolean | EstudianteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstudianteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $EstudiantePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiante"
    objects: {
      carrera: Prisma.$CarreraPayload<ExtArgs>
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      fecha_nacimiento: Date
      carrera_id: number
      apellido: string
    }, ExtArgs["result"]["estudiante"]>
    composites: {}
  }

  type EstudianteGetPayload<S extends boolean | null | undefined | EstudianteDefaultArgs> = $Result.GetResult<Prisma.$EstudiantePayload, S>

  type EstudianteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstudianteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EstudianteCountAggregateInputType | true
    }

  export interface EstudianteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiante'], meta: { name: 'Estudiante' } }
    /**
     * Find zero or one Estudiante that matches the filter.
     * @param {EstudianteFindUniqueArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstudianteFindUniqueArgs>(args: SelectSubset<T, EstudianteFindUniqueArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Estudiante that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EstudianteFindUniqueOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstudianteFindUniqueOrThrowArgs>(args: SelectSubset<T, EstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Estudiante that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstudianteFindFirstArgs>(args?: SelectSubset<T, EstudianteFindFirstArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Estudiante that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindFirstOrThrowArgs} args - Arguments to find a Estudiante
     * @example
     * // Get one Estudiante
     * const estudiante = await prisma.estudiante.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstudianteFindFirstOrThrowArgs>(args?: SelectSubset<T, EstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiante.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiante.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstudianteFindManyArgs>(args?: SelectSubset<T, EstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Estudiante.
     * @param {EstudianteCreateArgs} args - Arguments to create a Estudiante.
     * @example
     * // Create one Estudiante
     * const Estudiante = await prisma.estudiante.create({
     *   data: {
     *     // ... data to create a Estudiante
     *   }
     * })
     * 
     */
    create<T extends EstudianteCreateArgs>(args: SelectSubset<T, EstudianteCreateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Estudiantes.
     * @param {EstudianteCreateManyArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstudianteCreateManyArgs>(args?: SelectSubset<T, EstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estudiantes and returns the data saved in the database.
     * @param {EstudianteCreateManyAndReturnArgs} args - Arguments to create many Estudiantes.
     * @example
     * // Create many Estudiantes
     * const estudiante = await prisma.estudiante.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estudiantes and only return the `id`
     * const estudianteWithIdOnly = await prisma.estudiante.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstudianteCreateManyAndReturnArgs>(args?: SelectSubset<T, EstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Estudiante.
     * @param {EstudianteDeleteArgs} args - Arguments to delete one Estudiante.
     * @example
     * // Delete one Estudiante
     * const Estudiante = await prisma.estudiante.delete({
     *   where: {
     *     // ... filter to delete one Estudiante
     *   }
     * })
     * 
     */
    delete<T extends EstudianteDeleteArgs>(args: SelectSubset<T, EstudianteDeleteArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Estudiante.
     * @param {EstudianteUpdateArgs} args - Arguments to update one Estudiante.
     * @example
     * // Update one Estudiante
     * const estudiante = await prisma.estudiante.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstudianteUpdateArgs>(args: SelectSubset<T, EstudianteUpdateArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudianteDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiante.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstudianteDeleteManyArgs>(args?: SelectSubset<T, EstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiante = await prisma.estudiante.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstudianteUpdateManyArgs>(args: SelectSubset<T, EstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudiante.
     * @param {EstudianteUpsertArgs} args - Arguments to update or create a Estudiante.
     * @example
     * // Update or create a Estudiante
     * const estudiante = await prisma.estudiante.upsert({
     *   create: {
     *     // ... data to create a Estudiante
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante we want to update
     *   }
     * })
     */
    upsert<T extends EstudianteUpsertArgs>(args: SelectSubset<T, EstudianteUpsertArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiante.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudianteCountArgs>(
      args?: Subset<T, EstudianteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudianteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstudianteAggregateArgs>(args: Subset<T, EstudianteAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAggregateType<T>>

    /**
     * Group by Estudiante.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudianteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstudianteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudianteGroupByArgs['orderBy'] }
        : { orderBy?: EstudianteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiante model
   */
  readonly fields: EstudianteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiante.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudianteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inscripciones<T extends Estudiante$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Estudiante$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estudiante model
   */ 
  interface EstudianteFieldRefs {
    readonly id: FieldRef<"Estudiante", 'Int'>
    readonly nombre: FieldRef<"Estudiante", 'String'>
    readonly correo: FieldRef<"Estudiante", 'String'>
    readonly fecha_nacimiento: FieldRef<"Estudiante", 'DateTime'>
    readonly carrera_id: FieldRef<"Estudiante", 'Int'>
    readonly apellido: FieldRef<"Estudiante", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Estudiante findUnique
   */
  export type EstudianteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findUniqueOrThrow
   */
  export type EstudianteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante findFirst
   */
  export type EstudianteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findFirstOrThrow
   */
  export type EstudianteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiante to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante findMany
   */
  export type EstudianteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudianteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudianteOrderByWithRelationInput | EstudianteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudianteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudianteScalarFieldEnum | EstudianteScalarFieldEnum[]
  }

  /**
   * Estudiante create
   */
  export type EstudianteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiante.
     */
    data: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
  }

  /**
   * Estudiante createMany
   */
  export type EstudianteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estudiante createManyAndReturn
   */
  export type EstudianteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudianteCreateManyInput | EstudianteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Estudiante update
   */
  export type EstudianteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiante.
     */
    data: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
    /**
     * Choose, which Estudiante to update.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante updateMany
   */
  export type EstudianteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudianteWhereInput
  }

  /**
   * Estudiante upsert
   */
  export type EstudianteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiante to update in case it exists.
     */
    where: EstudianteWhereUniqueInput
    /**
     * In case the Estudiante found by the `where` argument doesn't exist, create a new Estudiante with this data.
     */
    create: XOR<EstudianteCreateInput, EstudianteUncheckedCreateInput>
    /**
     * In case the Estudiante was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudianteUpdateInput, EstudianteUncheckedUpdateInput>
  }

  /**
   * Estudiante delete
   */
  export type EstudianteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
    /**
     * Filter which Estudiante to delete.
     */
    where: EstudianteWhereUniqueInput
  }

  /**
   * Estudiante deleteMany
   */
  export type EstudianteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudianteWhereInput
  }

  /**
   * Estudiante.inscripciones
   */
  export type Estudiante$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Estudiante without action
   */
  export type EstudianteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiante
     */
    select?: EstudianteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstudianteInclude<ExtArgs> | null
  }


  /**
   * Model Profesor
   */

  export type AggregateProfesor = {
    _count: ProfesorCountAggregateOutputType | null
    _avg: ProfesorAvgAggregateOutputType | null
    _sum: ProfesorSumAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  export type ProfesorAvgAggregateOutputType = {
    id: number | null
    carrera_id: number | null
  }

  export type ProfesorSumAggregateOutputType = {
    id: number | null
    carrera_id: number | null
  }

  export type ProfesorMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    carrera_id: number | null
  }

  export type ProfesorMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    correo: string | null
    carrera_id: number | null
  }

  export type ProfesorCountAggregateOutputType = {
    id: number
    nombre: number
    correo: number
    carrera_id: number
    _all: number
  }


  export type ProfesorAvgAggregateInputType = {
    id?: true
    carrera_id?: true
  }

  export type ProfesorSumAggregateInputType = {
    id?: true
    carrera_id?: true
  }

  export type ProfesorMinAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    carrera_id?: true
  }

  export type ProfesorMaxAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    carrera_id?: true
  }

  export type ProfesorCountAggregateInputType = {
    id?: true
    nombre?: true
    correo?: true
    carrera_id?: true
    _all?: true
  }

  export type ProfesorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesor to aggregate.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesors
    **/
    _count?: true | ProfesorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfesorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfesorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesorMaxAggregateInputType
  }

  export type GetProfesorAggregateType<T extends ProfesorAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesor[P]>
      : GetScalarType<T[P], AggregateProfesor[P]>
  }




  export type ProfesorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesorWhereInput
    orderBy?: ProfesorOrderByWithAggregationInput | ProfesorOrderByWithAggregationInput[]
    by: ProfesorScalarFieldEnum[] | ProfesorScalarFieldEnum
    having?: ProfesorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesorCountAggregateInputType | true
    _avg?: ProfesorAvgAggregateInputType
    _sum?: ProfesorSumAggregateInputType
    _min?: ProfesorMinAggregateInputType
    _max?: ProfesorMaxAggregateInputType
  }

  export type ProfesorGroupByOutputType = {
    id: number
    nombre: string
    correo: string
    carrera_id: number
    _count: ProfesorCountAggregateOutputType | null
    _avg: ProfesorAvgAggregateOutputType | null
    _sum: ProfesorSumAggregateOutputType | null
    _min: ProfesorMinAggregateOutputType | null
    _max: ProfesorMaxAggregateOutputType | null
  }

  type GetProfesorGroupByPayload<T extends ProfesorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesorGroupByOutputType[P]>
        }
      >
    >


  export type ProfesorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    carrera_id?: boolean
    materias?: boolean | Profesor$materiasArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    titulos?: boolean | Profesor$titulosArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    correo?: boolean
    carrera_id?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesor"]>

  export type ProfesorSelectScalar = {
    id?: boolean
    nombre?: boolean
    correo?: boolean
    carrera_id?: boolean
  }

  export type ProfesorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | Profesor$materiasArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    titulos?: boolean | Profesor$titulosArgs<ExtArgs>
    _count?: boolean | ProfesorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfesorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
  }

  export type $ProfesorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesor"
    objects: {
      materias: Prisma.$MateriaPayload<ExtArgs>[]
      carrera: Prisma.$CarreraPayload<ExtArgs>
      titulos: Prisma.$TituloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      correo: string
      carrera_id: number
    }, ExtArgs["result"]["profesor"]>
    composites: {}
  }

  type ProfesorGetPayload<S extends boolean | null | undefined | ProfesorDefaultArgs> = $Result.GetResult<Prisma.$ProfesorPayload, S>

  type ProfesorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProfesorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProfesorCountAggregateInputType | true
    }

  export interface ProfesorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesor'], meta: { name: 'Profesor' } }
    /**
     * Find zero or one Profesor that matches the filter.
     * @param {ProfesorFindUniqueArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesorFindUniqueArgs>(args: SelectSubset<T, ProfesorFindUniqueArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Profesor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProfesorFindUniqueOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Profesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesorFindFirstArgs>(args?: SelectSubset<T, ProfesorFindFirstArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Profesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindFirstOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Profesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesors
     * const profesors = await prisma.profesor.findMany()
     * 
     * // Get first 10 Profesors
     * const profesors = await prisma.profesor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesorWithIdOnly = await prisma.profesor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesorFindManyArgs>(args?: SelectSubset<T, ProfesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Profesor.
     * @param {ProfesorCreateArgs} args - Arguments to create a Profesor.
     * @example
     * // Create one Profesor
     * const Profesor = await prisma.profesor.create({
     *   data: {
     *     // ... data to create a Profesor
     *   }
     * })
     * 
     */
    create<T extends ProfesorCreateArgs>(args: SelectSubset<T, ProfesorCreateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Profesors.
     * @param {ProfesorCreateManyArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesorCreateManyArgs>(args?: SelectSubset<T, ProfesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profesors and returns the data saved in the database.
     * @param {ProfesorCreateManyAndReturnArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profesors and only return the `id`
     * const profesorWithIdOnly = await prisma.profesor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfesorCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfesorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Profesor.
     * @param {ProfesorDeleteArgs} args - Arguments to delete one Profesor.
     * @example
     * // Delete one Profesor
     * const Profesor = await prisma.profesor.delete({
     *   where: {
     *     // ... filter to delete one Profesor
     *   }
     * })
     * 
     */
    delete<T extends ProfesorDeleteArgs>(args: SelectSubset<T, ProfesorDeleteArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Profesor.
     * @param {ProfesorUpdateArgs} args - Arguments to update one Profesor.
     * @example
     * // Update one Profesor
     * const profesor = await prisma.profesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesorUpdateArgs>(args: SelectSubset<T, ProfesorUpdateArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Profesors.
     * @param {ProfesorDeleteManyArgs} args - Arguments to filter Profesors to delete.
     * @example
     * // Delete a few Profesors
     * const { count } = await prisma.profesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesorDeleteManyArgs>(args?: SelectSubset<T, ProfesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesorUpdateManyArgs>(args: SelectSubset<T, ProfesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profesor.
     * @param {ProfesorUpsertArgs} args - Arguments to update or create a Profesor.
     * @example
     * // Update or create a Profesor
     * const profesor = await prisma.profesor.upsert({
     *   create: {
     *     // ... data to create a Profesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesor we want to update
     *   }
     * })
     */
    upsert<T extends ProfesorUpsertArgs>(args: SelectSubset<T, ProfesorUpsertArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorCountArgs} args - Arguments to filter Profesors to count.
     * @example
     * // Count the number of Profesors
     * const count = await prisma.profesor.count({
     *   where: {
     *     // ... the filter for the Profesors we want to count
     *   }
     * })
    **/
    count<T extends ProfesorCountArgs>(
      args?: Subset<T, ProfesorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfesorAggregateArgs>(args: Subset<T, ProfesorAggregateArgs>): Prisma.PrismaPromise<GetProfesorAggregateType<T>>

    /**
     * Group by Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfesorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesorGroupByArgs['orderBy'] }
        : { orderBy?: ProfesorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesor model
   */
  readonly fields: ProfesorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends Profesor$materiasArgs<ExtArgs> = {}>(args?: Subset<T, Profesor$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany"> | Null>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    titulos<T extends Profesor$titulosArgs<ExtArgs> = {}>(args?: Subset<T, Profesor$titulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profesor model
   */ 
  interface ProfesorFieldRefs {
    readonly id: FieldRef<"Profesor", 'Int'>
    readonly nombre: FieldRef<"Profesor", 'String'>
    readonly correo: FieldRef<"Profesor", 'String'>
    readonly carrera_id: FieldRef<"Profesor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profesor findUnique
   */
  export type ProfesorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findUniqueOrThrow
   */
  export type ProfesorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor findFirst
   */
  export type ProfesorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findFirstOrThrow
   */
  export type ProfesorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesor to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesors.
     */
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor findMany
   */
  export type ProfesorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter, which Profesors to fetch.
     */
    where?: ProfesorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesors to fetch.
     */
    orderBy?: ProfesorOrderByWithRelationInput | ProfesorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesors.
     */
    cursor?: ProfesorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesors.
     */
    skip?: number
    distinct?: ProfesorScalarFieldEnum | ProfesorScalarFieldEnum[]
  }

  /**
   * Profesor create
   */
  export type ProfesorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesor.
     */
    data: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
  }

  /**
   * Profesor createMany
   */
  export type ProfesorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesor createManyAndReturn
   */
  export type ProfesorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Profesors.
     */
    data: ProfesorCreateManyInput | ProfesorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profesor update
   */
  export type ProfesorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesor.
     */
    data: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
    /**
     * Choose, which Profesor to update.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor updateMany
   */
  export type ProfesorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesors.
     */
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyInput>
    /**
     * Filter which Profesors to update
     */
    where?: ProfesorWhereInput
  }

  /**
   * Profesor upsert
   */
  export type ProfesorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesor to update in case it exists.
     */
    where: ProfesorWhereUniqueInput
    /**
     * In case the Profesor found by the `where` argument doesn't exist, create a new Profesor with this data.
     */
    create: XOR<ProfesorCreateInput, ProfesorUncheckedCreateInput>
    /**
     * In case the Profesor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesorUpdateInput, ProfesorUncheckedUpdateInput>
  }

  /**
   * Profesor delete
   */
  export type ProfesorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
    /**
     * Filter which Profesor to delete.
     */
    where: ProfesorWhereUniqueInput
  }

  /**
   * Profesor deleteMany
   */
  export type ProfesorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesors to delete
     */
    where?: ProfesorWhereInput
  }

  /**
   * Profesor.materias
   */
  export type Profesor$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    cursor?: MateriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Profesor.titulos
   */
  export type Profesor$titulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    where?: TituloWhereInput
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    cursor?: TituloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Profesor without action
   */
  export type ProfesorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesor
     */
    select?: ProfesorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesorInclude<ExtArgs> | null
  }


  /**
   * Model Materia
   */

  export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  export type MateriaAvgAggregateOutputType = {
    id: number | null
    carrera_id: number | null
    profesor_id: number | null
  }

  export type MateriaSumAggregateOutputType = {
    id: number | null
    carrera_id: number | null
    profesor_id: number | null
  }

  export type MateriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    carrera_id: number | null
    profesor_id: number | null
  }

  export type MateriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    carrera_id: number | null
    profesor_id: number | null
  }

  export type MateriaCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    carrera_id: number
    profesor_id: number
    _all: number
  }


  export type MateriaAvgAggregateInputType = {
    id?: true
    carrera_id?: true
    profesor_id?: true
  }

  export type MateriaSumAggregateInputType = {
    id?: true
    carrera_id?: true
    profesor_id?: true
  }

  export type MateriaMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    carrera_id?: true
    profesor_id?: true
  }

  export type MateriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    carrera_id?: true
    profesor_id?: true
  }

  export type MateriaCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    carrera_id?: true
    profesor_id?: true
    _all?: true
  }

  export type MateriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materia to aggregate.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materias
    **/
    _count?: true | MateriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MateriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MateriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType
  }

  export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
        [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateria[P]>
      : GetScalarType<T[P], AggregateMateria[P]>
  }




  export type MateriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriaWhereInput
    orderBy?: MateriaOrderByWithAggregationInput | MateriaOrderByWithAggregationInput[]
    by: MateriaScalarFieldEnum[] | MateriaScalarFieldEnum
    having?: MateriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriaCountAggregateInputType | true
    _avg?: MateriaAvgAggregateInputType
    _sum?: MateriaSumAggregateInputType
    _min?: MateriaMinAggregateInputType
    _max?: MateriaMaxAggregateInputType
  }

  export type MateriaGroupByOutputType = {
    id: number
    nombre: string
    codigo: string
    carrera_id: number
    profesor_id: number
    _count: MateriaCountAggregateOutputType | null
    _avg: MateriaAvgAggregateOutputType | null
    _sum: MateriaSumAggregateOutputType | null
    _min: MateriaMinAggregateOutputType | null
    _max: MateriaMaxAggregateOutputType | null
  }

  type GetMateriaGroupByPayload<T extends MateriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriaGroupByOutputType[P]>
            : GetScalarType<T[P], MateriaGroupByOutputType[P]>
        }
      >
    >


  export type MateriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    carrera_id?: boolean
    profesor_id?: boolean
    cursos?: boolean | Materia$cursosArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    carrera_id?: boolean
    profesor_id?: boolean
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materia"]>

  export type MateriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    carrera_id?: boolean
    profesor_id?: boolean
  }

  export type MateriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Materia$cursosArgs<ExtArgs>
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
    _count?: boolean | MateriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MateriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CarreraDefaultArgs<ExtArgs>
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
  }

  export type $MateriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materia"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
      carrera: Prisma.$CarreraPayload<ExtArgs>
      profesor: Prisma.$ProfesorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string
      carrera_id: number
      profesor_id: number
    }, ExtArgs["result"]["materia"]>
    composites: {}
  }

  type MateriaGetPayload<S extends boolean | null | undefined | MateriaDefaultArgs> = $Result.GetResult<Prisma.$MateriaPayload, S>

  type MateriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MateriaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MateriaCountAggregateInputType | true
    }

  export interface MateriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materia'], meta: { name: 'Materia' } }
    /**
     * Find zero or one Materia that matches the filter.
     * @param {MateriaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MateriaFindUniqueArgs>(args: SelectSubset<T, MateriaFindUniqueArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MateriaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MateriaFindUniqueOrThrowArgs>(args: SelectSubset<T, MateriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MateriaFindFirstArgs>(args?: SelectSubset<T, MateriaFindFirstArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MateriaFindFirstOrThrowArgs>(args?: SelectSubset<T, MateriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     * 
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MateriaFindManyArgs>(args?: SelectSubset<T, MateriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Materia.
     * @param {MateriaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     * 
     */
    create<T extends MateriaCreateArgs>(args: SelectSubset<T, MateriaCreateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Materias.
     * @param {MateriaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MateriaCreateManyArgs>(args?: SelectSubset<T, MateriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materias and returns the data saved in the database.
     * @param {MateriaCreateManyAndReturnArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materias and only return the `id`
     * const materiaWithIdOnly = await prisma.materia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MateriaCreateManyAndReturnArgs>(args?: SelectSubset<T, MateriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Materia.
     * @param {MateriaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     * 
     */
    delete<T extends MateriaDeleteArgs>(args: SelectSubset<T, MateriaDeleteArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Materia.
     * @param {MateriaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MateriaUpdateArgs>(args: SelectSubset<T, MateriaUpdateArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Materias.
     * @param {MateriaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MateriaDeleteManyArgs>(args?: SelectSubset<T, MateriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MateriaUpdateManyArgs>(args: SelectSubset<T, MateriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Materia.
     * @param {MateriaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends MateriaUpsertArgs>(args: SelectSubset<T, MateriaUpsertArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends MateriaCountArgs>(
      args?: Subset<T, MateriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriaAggregateArgs>(args: Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>

    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriaGroupByArgs['orderBy'] }
        : { orderBy?: MateriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materia model
   */
  readonly fields: MateriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Materia$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Materia$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany"> | Null>
    carrera<T extends CarreraDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarreraDefaultArgs<ExtArgs>>): Prisma__CarreraClient<$Result.GetResult<Prisma.$CarreraPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    profesor<T extends ProfesorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesorDefaultArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Materia model
   */ 
  interface MateriaFieldRefs {
    readonly id: FieldRef<"Materia", 'Int'>
    readonly nombre: FieldRef<"Materia", 'String'>
    readonly codigo: FieldRef<"Materia", 'String'>
    readonly carrera_id: FieldRef<"Materia", 'Int'>
    readonly profesor_id: FieldRef<"Materia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Materia findUnique
   */
  export type MateriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findUniqueOrThrow
   */
  export type MateriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia findFirst
   */
  export type MateriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findFirstOrThrow
   */
  export type MateriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materia to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materias.
     */
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia findMany
   */
  export type MateriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter, which Materias to fetch.
     */
    where?: MateriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materias to fetch.
     */
    orderBy?: MateriaOrderByWithRelationInput | MateriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materias.
     */
    cursor?: MateriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materias.
     */
    skip?: number
    distinct?: MateriaScalarFieldEnum | MateriaScalarFieldEnum[]
  }

  /**
   * Materia create
   */
  export type MateriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Materia.
     */
    data: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
  }

  /**
   * Materia createMany
   */
  export type MateriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Materia createManyAndReturn
   */
  export type MateriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Materias.
     */
    data: MateriaCreateManyInput | MateriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Materia update
   */
  export type MateriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Materia.
     */
    data: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
    /**
     * Choose, which Materia to update.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia updateMany
   */
  export type MateriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materias.
     */
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyInput>
    /**
     * Filter which Materias to update
     */
    where?: MateriaWhereInput
  }

  /**
   * Materia upsert
   */
  export type MateriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Materia to update in case it exists.
     */
    where: MateriaWhereUniqueInput
    /**
     * In case the Materia found by the `where` argument doesn't exist, create a new Materia with this data.
     */
    create: XOR<MateriaCreateInput, MateriaUncheckedCreateInput>
    /**
     * In case the Materia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriaUpdateInput, MateriaUncheckedUpdateInput>
  }

  /**
   * Materia delete
   */
  export type MateriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
    /**
     * Filter which Materia to delete.
     */
    where: MateriaWhereUniqueInput
  }

  /**
   * Materia deleteMany
   */
  export type MateriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materias to delete
     */
    where?: MateriaWhereInput
  }

  /**
   * Materia.cursos
   */
  export type Materia$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Materia without action
   */
  export type MateriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materia
     */
    select?: MateriaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MateriaInclude<ExtArgs> | null
  }


  /**
   * Model Curso
   */

  export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  export type CursoAvgAggregateOutputType = {
    id: number | null
    materia_id: number | null
    periodo_id: number | null
    cupo: number | null
  }

  export type CursoSumAggregateOutputType = {
    id: number | null
    materia_id: number | null
    periodo_id: number | null
    cupo: number | null
  }

  export type CursoMinAggregateOutputType = {
    id: number | null
    materia_id: number | null
    periodo_id: number | null
    cupo: number | null
    horario: string | null
  }

  export type CursoMaxAggregateOutputType = {
    id: number | null
    materia_id: number | null
    periodo_id: number | null
    cupo: number | null
    horario: string | null
  }

  export type CursoCountAggregateOutputType = {
    id: number
    materia_id: number
    periodo_id: number
    cupo: number
    horario: number
    _all: number
  }


  export type CursoAvgAggregateInputType = {
    id?: true
    materia_id?: true
    periodo_id?: true
    cupo?: true
  }

  export type CursoSumAggregateInputType = {
    id?: true
    materia_id?: true
    periodo_id?: true
    cupo?: true
  }

  export type CursoMinAggregateInputType = {
    id?: true
    materia_id?: true
    periodo_id?: true
    cupo?: true
    horario?: true
  }

  export type CursoMaxAggregateInputType = {
    id?: true
    materia_id?: true
    periodo_id?: true
    cupo?: true
    horario?: true
  }

  export type CursoCountAggregateInputType = {
    id?: true
    materia_id?: true
    periodo_id?: true
    cupo?: true
    horario?: true
    _all?: true
  }

  export type CursoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curso to aggregate.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cursos
    **/
    _count?: true | CursoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursoMaxAggregateInputType
  }

  export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
        [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurso[P]>
      : GetScalarType<T[P], AggregateCurso[P]>
  }




  export type CursoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithAggregationInput | CursoOrderByWithAggregationInput[]
    by: CursoScalarFieldEnum[] | CursoScalarFieldEnum
    having?: CursoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursoCountAggregateInputType | true
    _avg?: CursoAvgAggregateInputType
    _sum?: CursoSumAggregateInputType
    _min?: CursoMinAggregateInputType
    _max?: CursoMaxAggregateInputType
  }

  export type CursoGroupByOutputType = {
    id: number
    materia_id: number
    periodo_id: number
    cupo: number
    horario: string
    _count: CursoCountAggregateOutputType | null
    _avg: CursoAvgAggregateOutputType | null
    _sum: CursoSumAggregateOutputType | null
    _min: CursoMinAggregateOutputType | null
    _max: CursoMaxAggregateOutputType | null
  }

  type GetCursoGroupByPayload<T extends CursoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CursoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursoGroupByOutputType[P]>
            : GetScalarType<T[P], CursoGroupByOutputType[P]>
        }
      >
    >


  export type CursoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materia_id?: boolean
    periodo_id?: boolean
    cupo?: boolean
    horario?: boolean
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    inscripciones?: boolean | Curso$inscripcionesArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    materia_id?: boolean
    periodo_id?: boolean
    cupo?: boolean
    horario?: boolean
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curso"]>

  export type CursoSelectScalar = {
    id?: boolean
    materia_id?: boolean
    periodo_id?: boolean
    cupo?: boolean
    horario?: boolean
  }

  export type CursoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
    inscripciones?: boolean | Curso$inscripcionesArgs<ExtArgs>
    _count?: boolean | CursoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CursoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materia?: boolean | MateriaDefaultArgs<ExtArgs>
    periodo?: boolean | PeriodoDefaultArgs<ExtArgs>
  }

  export type $CursoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curso"
    objects: {
      materia: Prisma.$MateriaPayload<ExtArgs>
      periodo: Prisma.$PeriodoPayload<ExtArgs>
      inscripciones: Prisma.$InscripcionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      materia_id: number
      periodo_id: number
      cupo: number
      horario: string
    }, ExtArgs["result"]["curso"]>
    composites: {}
  }

  type CursoGetPayload<S extends boolean | null | undefined | CursoDefaultArgs> = $Result.GetResult<Prisma.$CursoPayload, S>

  type CursoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CursoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CursoCountAggregateInputType | true
    }

  export interface CursoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curso'], meta: { name: 'Curso' } }
    /**
     * Find zero or one Curso that matches the filter.
     * @param {CursoFindUniqueArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CursoFindUniqueArgs>(args: SelectSubset<T, CursoFindUniqueArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Curso that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CursoFindUniqueOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CursoFindUniqueOrThrowArgs>(args: SelectSubset<T, CursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Curso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CursoFindFirstArgs>(args?: SelectSubset<T, CursoFindFirstArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Curso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindFirstOrThrowArgs} args - Arguments to find a Curso
     * @example
     * // Get one Curso
     * const curso = await prisma.curso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CursoFindFirstOrThrowArgs>(args?: SelectSubset<T, CursoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.curso.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.curso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cursoWithIdOnly = await prisma.curso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CursoFindManyArgs>(args?: SelectSubset<T, CursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Curso.
     * @param {CursoCreateArgs} args - Arguments to create a Curso.
     * @example
     * // Create one Curso
     * const Curso = await prisma.curso.create({
     *   data: {
     *     // ... data to create a Curso
     *   }
     * })
     * 
     */
    create<T extends CursoCreateArgs>(args: SelectSubset<T, CursoCreateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cursos.
     * @param {CursoCreateManyArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CursoCreateManyArgs>(args?: SelectSubset<T, CursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cursos and returns the data saved in the database.
     * @param {CursoCreateManyAndReturnArgs} args - Arguments to create many Cursos.
     * @example
     * // Create many Cursos
     * const curso = await prisma.curso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cursos and only return the `id`
     * const cursoWithIdOnly = await prisma.curso.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CursoCreateManyAndReturnArgs>(args?: SelectSubset<T, CursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Curso.
     * @param {CursoDeleteArgs} args - Arguments to delete one Curso.
     * @example
     * // Delete one Curso
     * const Curso = await prisma.curso.delete({
     *   where: {
     *     // ... filter to delete one Curso
     *   }
     * })
     * 
     */
    delete<T extends CursoDeleteArgs>(args: SelectSubset<T, CursoDeleteArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Curso.
     * @param {CursoUpdateArgs} args - Arguments to update one Curso.
     * @example
     * // Update one Curso
     * const curso = await prisma.curso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CursoUpdateArgs>(args: SelectSubset<T, CursoUpdateArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cursos.
     * @param {CursoDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.curso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CursoDeleteManyArgs>(args?: SelectSubset<T, CursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const curso = await prisma.curso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CursoUpdateManyArgs>(args: SelectSubset<T, CursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Curso.
     * @param {CursoUpsertArgs} args - Arguments to update or create a Curso.
     * @example
     * // Update or create a Curso
     * const curso = await prisma.curso.upsert({
     *   create: {
     *     // ... data to create a Curso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curso we want to update
     *   }
     * })
     */
    upsert<T extends CursoUpsertArgs>(args: SelectSubset<T, CursoUpsertArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.curso.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends CursoCountArgs>(
      args?: Subset<T, CursoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursoAggregateArgs>(args: Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>

    /**
     * Group by Curso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursoGroupByArgs['orderBy'] }
        : { orderBy?: CursoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curso model
   */
  readonly fields: CursoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CursoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materia<T extends MateriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MateriaDefaultArgs<ExtArgs>>): Prisma__MateriaClient<$Result.GetResult<Prisma.$MateriaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    periodo<T extends PeriodoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodoDefaultArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inscripciones<T extends Curso$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, Curso$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curso model
   */ 
  interface CursoFieldRefs {
    readonly id: FieldRef<"Curso", 'Int'>
    readonly materia_id: FieldRef<"Curso", 'Int'>
    readonly periodo_id: FieldRef<"Curso", 'Int'>
    readonly cupo: FieldRef<"Curso", 'Int'>
    readonly horario: FieldRef<"Curso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Curso findUnique
   */
  export type CursoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findUniqueOrThrow
   */
  export type CursoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso findFirst
   */
  export type CursoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findFirstOrThrow
   */
  export type CursoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Curso to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cursos.
     */
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso findMany
   */
  export type CursoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter, which Cursos to fetch.
     */
    where?: CursoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cursos to fetch.
     */
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cursos.
     */
    cursor?: CursoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cursos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cursos.
     */
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Curso create
   */
  export type CursoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to create a Curso.
     */
    data: XOR<CursoCreateInput, CursoUncheckedCreateInput>
  }

  /**
   * Curso createMany
   */
  export type CursoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curso createManyAndReturn
   */
  export type CursoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cursos.
     */
    data: CursoCreateManyInput | CursoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curso update
   */
  export type CursoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The data needed to update a Curso.
     */
    data: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
    /**
     * Choose, which Curso to update.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso updateMany
   */
  export type CursoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cursos.
     */
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyInput>
    /**
     * Filter which Cursos to update
     */
    where?: CursoWhereInput
  }

  /**
   * Curso upsert
   */
  export type CursoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * The filter to search for the Curso to update in case it exists.
     */
    where: CursoWhereUniqueInput
    /**
     * In case the Curso found by the `where` argument doesn't exist, create a new Curso with this data.
     */
    create: XOR<CursoCreateInput, CursoUncheckedCreateInput>
    /**
     * In case the Curso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CursoUpdateInput, CursoUncheckedUpdateInput>
  }

  /**
   * Curso delete
   */
  export type CursoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    /**
     * Filter which Curso to delete.
     */
    where: CursoWhereUniqueInput
  }

  /**
   * Curso deleteMany
   */
  export type CursoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cursos to delete
     */
    where?: CursoWhereInput
  }

  /**
   * Curso.inscripciones
   */
  export type Curso$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    cursor?: InscripcionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Curso without action
   */
  export type CursoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
  }


  /**
   * Model Titulo
   */

  export type AggregateTitulo = {
    _count: TituloCountAggregateOutputType | null
    _avg: TituloAvgAggregateOutputType | null
    _sum: TituloSumAggregateOutputType | null
    _min: TituloMinAggregateOutputType | null
    _max: TituloMaxAggregateOutputType | null
  }

  export type TituloAvgAggregateOutputType = {
    id: number | null
    profesor_id: number | null
  }

  export type TituloSumAggregateOutputType = {
    id: number | null
    profesor_id: number | null
  }

  export type TituloMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    profesor_id: number | null
  }

  export type TituloMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    profesor_id: number | null
  }

  export type TituloCountAggregateOutputType = {
    id: number
    nombre: number
    profesor_id: number
    _all: number
  }


  export type TituloAvgAggregateInputType = {
    id?: true
    profesor_id?: true
  }

  export type TituloSumAggregateInputType = {
    id?: true
    profesor_id?: true
  }

  export type TituloMinAggregateInputType = {
    id?: true
    nombre?: true
    profesor_id?: true
  }

  export type TituloMaxAggregateInputType = {
    id?: true
    nombre?: true
    profesor_id?: true
  }

  export type TituloCountAggregateInputType = {
    id?: true
    nombre?: true
    profesor_id?: true
    _all?: true
  }

  export type TituloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Titulo to aggregate.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Titulos
    **/
    _count?: true | TituloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TituloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TituloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TituloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TituloMaxAggregateInputType
  }

  export type GetTituloAggregateType<T extends TituloAggregateArgs> = {
        [P in keyof T & keyof AggregateTitulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTitulo[P]>
      : GetScalarType<T[P], AggregateTitulo[P]>
  }




  export type TituloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TituloWhereInput
    orderBy?: TituloOrderByWithAggregationInput | TituloOrderByWithAggregationInput[]
    by: TituloScalarFieldEnum[] | TituloScalarFieldEnum
    having?: TituloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TituloCountAggregateInputType | true
    _avg?: TituloAvgAggregateInputType
    _sum?: TituloSumAggregateInputType
    _min?: TituloMinAggregateInputType
    _max?: TituloMaxAggregateInputType
  }

  export type TituloGroupByOutputType = {
    id: number
    nombre: string
    profesor_id: number
    _count: TituloCountAggregateOutputType | null
    _avg: TituloAvgAggregateOutputType | null
    _sum: TituloSumAggregateOutputType | null
    _min: TituloMinAggregateOutputType | null
    _max: TituloMaxAggregateOutputType | null
  }

  type GetTituloGroupByPayload<T extends TituloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TituloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TituloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TituloGroupByOutputType[P]>
            : GetScalarType<T[P], TituloGroupByOutputType[P]>
        }
      >
    >


  export type TituloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    profesor_id?: boolean
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titulo"]>

  export type TituloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    profesor_id?: boolean
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["titulo"]>

  export type TituloSelectScalar = {
    id?: boolean
    nombre?: boolean
    profesor_id?: boolean
  }

  export type TituloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
  }
  export type TituloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesor?: boolean | ProfesorDefaultArgs<ExtArgs>
  }

  export type $TituloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Titulo"
    objects: {
      profesor: Prisma.$ProfesorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      profesor_id: number
    }, ExtArgs["result"]["titulo"]>
    composites: {}
  }

  type TituloGetPayload<S extends boolean | null | undefined | TituloDefaultArgs> = $Result.GetResult<Prisma.$TituloPayload, S>

  type TituloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TituloFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TituloCountAggregateInputType | true
    }

  export interface TituloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Titulo'], meta: { name: 'Titulo' } }
    /**
     * Find zero or one Titulo that matches the filter.
     * @param {TituloFindUniqueArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TituloFindUniqueArgs>(args: SelectSubset<T, TituloFindUniqueArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Titulo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TituloFindUniqueOrThrowArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TituloFindUniqueOrThrowArgs>(args: SelectSubset<T, TituloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Titulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloFindFirstArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TituloFindFirstArgs>(args?: SelectSubset<T, TituloFindFirstArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Titulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloFindFirstOrThrowArgs} args - Arguments to find a Titulo
     * @example
     * // Get one Titulo
     * const titulo = await prisma.titulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TituloFindFirstOrThrowArgs>(args?: SelectSubset<T, TituloFindFirstOrThrowArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Titulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Titulos
     * const titulos = await prisma.titulo.findMany()
     * 
     * // Get first 10 Titulos
     * const titulos = await prisma.titulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tituloWithIdOnly = await prisma.titulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TituloFindManyArgs>(args?: SelectSubset<T, TituloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Titulo.
     * @param {TituloCreateArgs} args - Arguments to create a Titulo.
     * @example
     * // Create one Titulo
     * const Titulo = await prisma.titulo.create({
     *   data: {
     *     // ... data to create a Titulo
     *   }
     * })
     * 
     */
    create<T extends TituloCreateArgs>(args: SelectSubset<T, TituloCreateArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Titulos.
     * @param {TituloCreateManyArgs} args - Arguments to create many Titulos.
     * @example
     * // Create many Titulos
     * const titulo = await prisma.titulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TituloCreateManyArgs>(args?: SelectSubset<T, TituloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Titulos and returns the data saved in the database.
     * @param {TituloCreateManyAndReturnArgs} args - Arguments to create many Titulos.
     * @example
     * // Create many Titulos
     * const titulo = await prisma.titulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Titulos and only return the `id`
     * const tituloWithIdOnly = await prisma.titulo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TituloCreateManyAndReturnArgs>(args?: SelectSubset<T, TituloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Titulo.
     * @param {TituloDeleteArgs} args - Arguments to delete one Titulo.
     * @example
     * // Delete one Titulo
     * const Titulo = await prisma.titulo.delete({
     *   where: {
     *     // ... filter to delete one Titulo
     *   }
     * })
     * 
     */
    delete<T extends TituloDeleteArgs>(args: SelectSubset<T, TituloDeleteArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Titulo.
     * @param {TituloUpdateArgs} args - Arguments to update one Titulo.
     * @example
     * // Update one Titulo
     * const titulo = await prisma.titulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TituloUpdateArgs>(args: SelectSubset<T, TituloUpdateArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Titulos.
     * @param {TituloDeleteManyArgs} args - Arguments to filter Titulos to delete.
     * @example
     * // Delete a few Titulos
     * const { count } = await prisma.titulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TituloDeleteManyArgs>(args?: SelectSubset<T, TituloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Titulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Titulos
     * const titulo = await prisma.titulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TituloUpdateManyArgs>(args: SelectSubset<T, TituloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Titulo.
     * @param {TituloUpsertArgs} args - Arguments to update or create a Titulo.
     * @example
     * // Update or create a Titulo
     * const titulo = await prisma.titulo.upsert({
     *   create: {
     *     // ... data to create a Titulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Titulo we want to update
     *   }
     * })
     */
    upsert<T extends TituloUpsertArgs>(args: SelectSubset<T, TituloUpsertArgs<ExtArgs>>): Prisma__TituloClient<$Result.GetResult<Prisma.$TituloPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Titulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloCountArgs} args - Arguments to filter Titulos to count.
     * @example
     * // Count the number of Titulos
     * const count = await prisma.titulo.count({
     *   where: {
     *     // ... the filter for the Titulos we want to count
     *   }
     * })
    **/
    count<T extends TituloCountArgs>(
      args?: Subset<T, TituloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TituloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Titulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TituloAggregateArgs>(args: Subset<T, TituloAggregateArgs>): Prisma.PrismaPromise<GetTituloAggregateType<T>>

    /**
     * Group by Titulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TituloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TituloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TituloGroupByArgs['orderBy'] }
        : { orderBy?: TituloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TituloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTituloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Titulo model
   */
  readonly fields: TituloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Titulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TituloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesor<T extends ProfesorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesorDefaultArgs<ExtArgs>>): Prisma__ProfesorClient<$Result.GetResult<Prisma.$ProfesorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Titulo model
   */ 
  interface TituloFieldRefs {
    readonly id: FieldRef<"Titulo", 'Int'>
    readonly nombre: FieldRef<"Titulo", 'String'>
    readonly profesor_id: FieldRef<"Titulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Titulo findUnique
   */
  export type TituloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo findUniqueOrThrow
   */
  export type TituloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo findFirst
   */
  export type TituloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Titulos.
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Titulos.
     */
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Titulo findFirstOrThrow
   */
  export type TituloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulo to fetch.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Titulos.
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Titulos.
     */
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Titulo findMany
   */
  export type TituloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter, which Titulos to fetch.
     */
    where?: TituloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Titulos to fetch.
     */
    orderBy?: TituloOrderByWithRelationInput | TituloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Titulos.
     */
    cursor?: TituloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Titulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Titulos.
     */
    skip?: number
    distinct?: TituloScalarFieldEnum | TituloScalarFieldEnum[]
  }

  /**
   * Titulo create
   */
  export type TituloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * The data needed to create a Titulo.
     */
    data: XOR<TituloCreateInput, TituloUncheckedCreateInput>
  }

  /**
   * Titulo createMany
   */
  export type TituloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Titulos.
     */
    data: TituloCreateManyInput | TituloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Titulo createManyAndReturn
   */
  export type TituloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Titulos.
     */
    data: TituloCreateManyInput | TituloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Titulo update
   */
  export type TituloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * The data needed to update a Titulo.
     */
    data: XOR<TituloUpdateInput, TituloUncheckedUpdateInput>
    /**
     * Choose, which Titulo to update.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo updateMany
   */
  export type TituloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Titulos.
     */
    data: XOR<TituloUpdateManyMutationInput, TituloUncheckedUpdateManyInput>
    /**
     * Filter which Titulos to update
     */
    where?: TituloWhereInput
  }

  /**
   * Titulo upsert
   */
  export type TituloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * The filter to search for the Titulo to update in case it exists.
     */
    where: TituloWhereUniqueInput
    /**
     * In case the Titulo found by the `where` argument doesn't exist, create a new Titulo with this data.
     */
    create: XOR<TituloCreateInput, TituloUncheckedCreateInput>
    /**
     * In case the Titulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TituloUpdateInput, TituloUncheckedUpdateInput>
  }

  /**
   * Titulo delete
   */
  export type TituloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
    /**
     * Filter which Titulo to delete.
     */
    where: TituloWhereUniqueInput
  }

  /**
   * Titulo deleteMany
   */
  export type TituloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Titulos to delete
     */
    where?: TituloWhereInput
  }

  /**
   * Titulo without action
   */
  export type TituloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Titulo
     */
    select?: TituloSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TituloInclude<ExtArgs> | null
  }


  /**
   * Model Inscripcion
   */

  export type AggregateInscripcion = {
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  export type InscripcionAvgAggregateOutputType = {
    id: number | null
    estudiante_id: number | null
    curso_id: number | null
  }

  export type InscripcionSumAggregateOutputType = {
    id: number | null
    estudiante_id: number | null
    curso_id: number | null
  }

  export type InscripcionMinAggregateOutputType = {
    id: number | null
    estudiante_id: number | null
    curso_id: number | null
    fecha_inscripcion: Date | null
    estado: string | null
  }

  export type InscripcionMaxAggregateOutputType = {
    id: number | null
    estudiante_id: number | null
    curso_id: number | null
    fecha_inscripcion: Date | null
    estado: string | null
  }

  export type InscripcionCountAggregateOutputType = {
    id: number
    estudiante_id: number
    curso_id: number
    fecha_inscripcion: number
    estado: number
    _all: number
  }


  export type InscripcionAvgAggregateInputType = {
    id?: true
    estudiante_id?: true
    curso_id?: true
  }

  export type InscripcionSumAggregateInputType = {
    id?: true
    estudiante_id?: true
    curso_id?: true
  }

  export type InscripcionMinAggregateInputType = {
    id?: true
    estudiante_id?: true
    curso_id?: true
    fecha_inscripcion?: true
    estado?: true
  }

  export type InscripcionMaxAggregateInputType = {
    id?: true
    estudiante_id?: true
    curso_id?: true
    fecha_inscripcion?: true
    estado?: true
  }

  export type InscripcionCountAggregateInputType = {
    id?: true
    estudiante_id?: true
    curso_id?: true
    fecha_inscripcion?: true
    estado?: true
    _all?: true
  }

  export type InscripcionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcion to aggregate.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inscripcions
    **/
    _count?: true | InscripcionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionMaxAggregateInputType
  }

  export type GetInscripcionAggregateType<T extends InscripcionAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripcion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripcion[P]>
      : GetScalarType<T[P], AggregateInscripcion[P]>
  }




  export type InscripcionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InscripcionWhereInput
    orderBy?: InscripcionOrderByWithAggregationInput | InscripcionOrderByWithAggregationInput[]
    by: InscripcionScalarFieldEnum[] | InscripcionScalarFieldEnum
    having?: InscripcionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionCountAggregateInputType | true
    _avg?: InscripcionAvgAggregateInputType
    _sum?: InscripcionSumAggregateInputType
    _min?: InscripcionMinAggregateInputType
    _max?: InscripcionMaxAggregateInputType
  }

  export type InscripcionGroupByOutputType = {
    id: number
    estudiante_id: number
    curso_id: number
    fecha_inscripcion: Date
    estado: string
    _count: InscripcionCountAggregateOutputType | null
    _avg: InscripcionAvgAggregateOutputType | null
    _sum: InscripcionSumAggregateOutputType | null
    _min: InscripcionMinAggregateOutputType | null
    _max: InscripcionMaxAggregateOutputType | null
  }

  type GetInscripcionGroupByPayload<T extends InscripcionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionGroupByOutputType[P]>
        }
      >
    >


  export type InscripcionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudiante_id?: boolean
    curso_id?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estudiante_id?: boolean
    curso_id?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inscripcion"]>

  export type InscripcionSelectScalar = {
    id?: boolean
    estudiante_id?: boolean
    curso_id?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
  }

  export type InscripcionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
  }
  export type InscripcionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curso?: boolean | CursoDefaultArgs<ExtArgs>
    estudiante?: boolean | EstudianteDefaultArgs<ExtArgs>
  }

  export type $InscripcionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inscripcion"
    objects: {
      curso: Prisma.$CursoPayload<ExtArgs>
      estudiante: Prisma.$EstudiantePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      estudiante_id: number
      curso_id: number
      fecha_inscripcion: Date
      estado: string
    }, ExtArgs["result"]["inscripcion"]>
    composites: {}
  }

  type InscripcionGetPayload<S extends boolean | null | undefined | InscripcionDefaultArgs> = $Result.GetResult<Prisma.$InscripcionPayload, S>

  type InscripcionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InscripcionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InscripcionCountAggregateInputType | true
    }

  export interface InscripcionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inscripcion'], meta: { name: 'Inscripcion' } }
    /**
     * Find zero or one Inscripcion that matches the filter.
     * @param {InscripcionFindUniqueArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InscripcionFindUniqueArgs>(args: SelectSubset<T, InscripcionFindUniqueArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inscripcion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InscripcionFindUniqueOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InscripcionFindUniqueOrThrowArgs>(args: SelectSubset<T, InscripcionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inscripcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InscripcionFindFirstArgs>(args?: SelectSubset<T, InscripcionFindFirstArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inscripcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindFirstOrThrowArgs} args - Arguments to find a Inscripcion
     * @example
     * // Get one Inscripcion
     * const inscripcion = await prisma.inscripcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InscripcionFindFirstOrThrowArgs>(args?: SelectSubset<T, InscripcionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inscripcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany()
     * 
     * // Get first 10 Inscripcions
     * const inscripcions = await prisma.inscripcion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InscripcionFindManyArgs>(args?: SelectSubset<T, InscripcionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inscripcion.
     * @param {InscripcionCreateArgs} args - Arguments to create a Inscripcion.
     * @example
     * // Create one Inscripcion
     * const Inscripcion = await prisma.inscripcion.create({
     *   data: {
     *     // ... data to create a Inscripcion
     *   }
     * })
     * 
     */
    create<T extends InscripcionCreateArgs>(args: SelectSubset<T, InscripcionCreateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inscripcions.
     * @param {InscripcionCreateManyArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InscripcionCreateManyArgs>(args?: SelectSubset<T, InscripcionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inscripcions and returns the data saved in the database.
     * @param {InscripcionCreateManyAndReturnArgs} args - Arguments to create many Inscripcions.
     * @example
     * // Create many Inscripcions
     * const inscripcion = await prisma.inscripcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inscripcions and only return the `id`
     * const inscripcionWithIdOnly = await prisma.inscripcion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InscripcionCreateManyAndReturnArgs>(args?: SelectSubset<T, InscripcionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inscripcion.
     * @param {InscripcionDeleteArgs} args - Arguments to delete one Inscripcion.
     * @example
     * // Delete one Inscripcion
     * const Inscripcion = await prisma.inscripcion.delete({
     *   where: {
     *     // ... filter to delete one Inscripcion
     *   }
     * })
     * 
     */
    delete<T extends InscripcionDeleteArgs>(args: SelectSubset<T, InscripcionDeleteArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inscripcion.
     * @param {InscripcionUpdateArgs} args - Arguments to update one Inscripcion.
     * @example
     * // Update one Inscripcion
     * const inscripcion = await prisma.inscripcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InscripcionUpdateArgs>(args: SelectSubset<T, InscripcionUpdateArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inscripcions.
     * @param {InscripcionDeleteManyArgs} args - Arguments to filter Inscripcions to delete.
     * @example
     * // Delete a few Inscripcions
     * const { count } = await prisma.inscripcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InscripcionDeleteManyArgs>(args?: SelectSubset<T, InscripcionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripcions
     * const inscripcion = await prisma.inscripcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InscripcionUpdateManyArgs>(args: SelectSubset<T, InscripcionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inscripcion.
     * @param {InscripcionUpsertArgs} args - Arguments to update or create a Inscripcion.
     * @example
     * // Update or create a Inscripcion
     * const inscripcion = await prisma.inscripcion.upsert({
     *   create: {
     *     // ... data to create a Inscripcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripcion we want to update
     *   }
     * })
     */
    upsert<T extends InscripcionUpsertArgs>(args: SelectSubset<T, InscripcionUpsertArgs<ExtArgs>>): Prisma__InscripcionClient<$Result.GetResult<Prisma.$InscripcionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inscripcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionCountArgs} args - Arguments to filter Inscripcions to count.
     * @example
     * // Count the number of Inscripcions
     * const count = await prisma.inscripcion.count({
     *   where: {
     *     // ... the filter for the Inscripcions we want to count
     *   }
     * })
    **/
    count<T extends InscripcionCountArgs>(
      args?: Subset<T, InscripcionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InscripcionAggregateArgs>(args: Subset<T, InscripcionAggregateArgs>): Prisma.PrismaPromise<GetInscripcionAggregateType<T>>

    /**
     * Group by Inscripcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InscripcionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InscripcionGroupByArgs['orderBy'] }
        : { orderBy?: InscripcionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InscripcionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inscripcion model
   */
  readonly fields: InscripcionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inscripcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InscripcionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curso<T extends CursoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CursoDefaultArgs<ExtArgs>>): Prisma__CursoClient<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    estudiante<T extends EstudianteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudianteDefaultArgs<ExtArgs>>): Prisma__EstudianteClient<$Result.GetResult<Prisma.$EstudiantePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inscripcion model
   */ 
  interface InscripcionFieldRefs {
    readonly id: FieldRef<"Inscripcion", 'Int'>
    readonly estudiante_id: FieldRef<"Inscripcion", 'Int'>
    readonly curso_id: FieldRef<"Inscripcion", 'Int'>
    readonly fecha_inscripcion: FieldRef<"Inscripcion", 'DateTime'>
    readonly estado: FieldRef<"Inscripcion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inscripcion findUnique
   */
  export type InscripcionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findUniqueOrThrow
   */
  export type InscripcionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion findFirst
   */
  export type InscripcionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findFirstOrThrow
   */
  export type InscripcionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcion to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inscripcions.
     */
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion findMany
   */
  export type InscripcionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter, which Inscripcions to fetch.
     */
    where?: InscripcionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inscripcions to fetch.
     */
    orderBy?: InscripcionOrderByWithRelationInput | InscripcionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inscripcions.
     */
    cursor?: InscripcionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inscripcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inscripcions.
     */
    skip?: number
    distinct?: InscripcionScalarFieldEnum | InscripcionScalarFieldEnum[]
  }

  /**
   * Inscripcion create
   */
  export type InscripcionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to create a Inscripcion.
     */
    data: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
  }

  /**
   * Inscripcion createMany
   */
  export type InscripcionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inscripcion createManyAndReturn
   */
  export type InscripcionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inscripcions.
     */
    data: InscripcionCreateManyInput | InscripcionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inscripcion update
   */
  export type InscripcionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The data needed to update a Inscripcion.
     */
    data: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
    /**
     * Choose, which Inscripcion to update.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion updateMany
   */
  export type InscripcionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inscripcions.
     */
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyInput>
    /**
     * Filter which Inscripcions to update
     */
    where?: InscripcionWhereInput
  }

  /**
   * Inscripcion upsert
   */
  export type InscripcionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * The filter to search for the Inscripcion to update in case it exists.
     */
    where: InscripcionWhereUniqueInput
    /**
     * In case the Inscripcion found by the `where` argument doesn't exist, create a new Inscripcion with this data.
     */
    create: XOR<InscripcionCreateInput, InscripcionUncheckedCreateInput>
    /**
     * In case the Inscripcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InscripcionUpdateInput, InscripcionUncheckedUpdateInput>
  }

  /**
   * Inscripcion delete
   */
  export type InscripcionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
    /**
     * Filter which Inscripcion to delete.
     */
    where: InscripcionWhereUniqueInput
  }

  /**
   * Inscripcion deleteMany
   */
  export type InscripcionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inscripcions to delete
     */
    where?: InscripcionWhereInput
  }

  /**
   * Inscripcion without action
   */
  export type InscripcionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inscripcion
     */
    select?: InscripcionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InscripcionInclude<ExtArgs> | null
  }


  /**
   * Model Periodo
   */

  export type AggregatePeriodo = {
    _count: PeriodoCountAggregateOutputType | null
    _avg: PeriodoAvgAggregateOutputType | null
    _sum: PeriodoSumAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  export type PeriodoAvgAggregateOutputType = {
    id: number | null
  }

  export type PeriodoSumAggregateOutputType = {
    id: number | null
  }

  export type PeriodoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
  }

  export type PeriodoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
  }

  export type PeriodoCountAggregateOutputType = {
    id: number
    nombre: number
    fecha_inicio: number
    fecha_fin: number
    _all: number
  }


  export type PeriodoAvgAggregateInputType = {
    id?: true
  }

  export type PeriodoSumAggregateInputType = {
    id?: true
  }

  export type PeriodoMinAggregateInputType = {
    id?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
  }

  export type PeriodoMaxAggregateInputType = {
    id?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
  }

  export type PeriodoCountAggregateInputType = {
    id?: true
    nombre?: true
    fecha_inicio?: true
    fecha_fin?: true
    _all?: true
  }

  export type PeriodoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodo to aggregate.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periodos
    **/
    _count?: true | PeriodoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodoMaxAggregateInputType
  }

  export type GetPeriodoAggregateType<T extends PeriodoAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodo[P]>
      : GetScalarType<T[P], AggregatePeriodo[P]>
  }




  export type PeriodoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodoWhereInput
    orderBy?: PeriodoOrderByWithAggregationInput | PeriodoOrderByWithAggregationInput[]
    by: PeriodoScalarFieldEnum[] | PeriodoScalarFieldEnum
    having?: PeriodoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodoCountAggregateInputType | true
    _avg?: PeriodoAvgAggregateInputType
    _sum?: PeriodoSumAggregateInputType
    _min?: PeriodoMinAggregateInputType
    _max?: PeriodoMaxAggregateInputType
  }

  export type PeriodoGroupByOutputType = {
    id: number
    nombre: string
    fecha_inicio: Date
    fecha_fin: Date
    _count: PeriodoCountAggregateOutputType | null
    _avg: PeriodoAvgAggregateOutputType | null
    _sum: PeriodoSumAggregateOutputType | null
    _min: PeriodoMinAggregateOutputType | null
    _max: PeriodoMaxAggregateOutputType | null
  }

  type GetPeriodoGroupByPayload<T extends PeriodoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodoGroupByOutputType[P]>
        }
      >
    >


  export type PeriodoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    cursos?: boolean | Periodo$cursosArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }, ExtArgs["result"]["periodo"]>

  export type PeriodoSelectScalar = {
    id?: boolean
    nombre?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
  }

  export type PeriodoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursos?: boolean | Periodo$cursosArgs<ExtArgs>
    _count?: boolean | PeriodoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Periodo"
    objects: {
      cursos: Prisma.$CursoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      fecha_inicio: Date
      fecha_fin: Date
    }, ExtArgs["result"]["periodo"]>
    composites: {}
  }

  type PeriodoGetPayload<S extends boolean | null | undefined | PeriodoDefaultArgs> = $Result.GetResult<Prisma.$PeriodoPayload, S>

  type PeriodoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeriodoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeriodoCountAggregateInputType | true
    }

  export interface PeriodoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Periodo'], meta: { name: 'Periodo' } }
    /**
     * Find zero or one Periodo that matches the filter.
     * @param {PeriodoFindUniqueArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodoFindUniqueArgs>(args: SelectSubset<T, PeriodoFindUniqueArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Periodo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PeriodoFindUniqueOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodoFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Periodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodoFindFirstArgs>(args?: SelectSubset<T, PeriodoFindFirstArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Periodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindFirstOrThrowArgs} args - Arguments to find a Periodo
     * @example
     * // Get one Periodo
     * const periodo = await prisma.periodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodoFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Periodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodos
     * const periodos = await prisma.periodo.findMany()
     * 
     * // Get first 10 Periodos
     * const periodos = await prisma.periodo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const periodoWithIdOnly = await prisma.periodo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeriodoFindManyArgs>(args?: SelectSubset<T, PeriodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Periodo.
     * @param {PeriodoCreateArgs} args - Arguments to create a Periodo.
     * @example
     * // Create one Periodo
     * const Periodo = await prisma.periodo.create({
     *   data: {
     *     // ... data to create a Periodo
     *   }
     * })
     * 
     */
    create<T extends PeriodoCreateArgs>(args: SelectSubset<T, PeriodoCreateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Periodos.
     * @param {PeriodoCreateManyArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodoCreateManyArgs>(args?: SelectSubset<T, PeriodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Periodos and returns the data saved in the database.
     * @param {PeriodoCreateManyAndReturnArgs} args - Arguments to create many Periodos.
     * @example
     * // Create many Periodos
     * const periodo = await prisma.periodo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Periodos and only return the `id`
     * const periodoWithIdOnly = await prisma.periodo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodoCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Periodo.
     * @param {PeriodoDeleteArgs} args - Arguments to delete one Periodo.
     * @example
     * // Delete one Periodo
     * const Periodo = await prisma.periodo.delete({
     *   where: {
     *     // ... filter to delete one Periodo
     *   }
     * })
     * 
     */
    delete<T extends PeriodoDeleteArgs>(args: SelectSubset<T, PeriodoDeleteArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Periodo.
     * @param {PeriodoUpdateArgs} args - Arguments to update one Periodo.
     * @example
     * // Update one Periodo
     * const periodo = await prisma.periodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodoUpdateArgs>(args: SelectSubset<T, PeriodoUpdateArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Periodos.
     * @param {PeriodoDeleteManyArgs} args - Arguments to filter Periodos to delete.
     * @example
     * // Delete a few Periodos
     * const { count } = await prisma.periodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodoDeleteManyArgs>(args?: SelectSubset<T, PeriodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodos
     * const periodo = await prisma.periodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodoUpdateManyArgs>(args: SelectSubset<T, PeriodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Periodo.
     * @param {PeriodoUpsertArgs} args - Arguments to update or create a Periodo.
     * @example
     * // Update or create a Periodo
     * const periodo = await prisma.periodo.upsert({
     *   create: {
     *     // ... data to create a Periodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodo we want to update
     *   }
     * })
     */
    upsert<T extends PeriodoUpsertArgs>(args: SelectSubset<T, PeriodoUpsertArgs<ExtArgs>>): Prisma__PeriodoClient<$Result.GetResult<Prisma.$PeriodoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Periodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoCountArgs} args - Arguments to filter Periodos to count.
     * @example
     * // Count the number of Periodos
     * const count = await prisma.periodo.count({
     *   where: {
     *     // ... the filter for the Periodos we want to count
     *   }
     * })
    **/
    count<T extends PeriodoCountArgs>(
      args?: Subset<T, PeriodoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodoAggregateArgs>(args: Subset<T, PeriodoAggregateArgs>): Prisma.PrismaPromise<GetPeriodoAggregateType<T>>

    /**
     * Group by Periodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriodoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodoGroupByArgs['orderBy'] }
        : { orderBy?: PeriodoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Periodo model
   */
  readonly fields: PeriodoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Periodo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cursos<T extends Periodo$cursosArgs<ExtArgs> = {}>(args?: Subset<T, Periodo$cursosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CursoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Periodo model
   */ 
  interface PeriodoFieldRefs {
    readonly id: FieldRef<"Periodo", 'Int'>
    readonly nombre: FieldRef<"Periodo", 'String'>
    readonly fecha_inicio: FieldRef<"Periodo", 'DateTime'>
    readonly fecha_fin: FieldRef<"Periodo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Periodo findUnique
   */
  export type PeriodoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findUniqueOrThrow
   */
  export type PeriodoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo findFirst
   */
  export type PeriodoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findFirstOrThrow
   */
  export type PeriodoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodo to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periodos.
     */
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo findMany
   */
  export type PeriodoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter, which Periodos to fetch.
     */
    where?: PeriodoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periodos to fetch.
     */
    orderBy?: PeriodoOrderByWithRelationInput | PeriodoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periodos.
     */
    cursor?: PeriodoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periodos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periodos.
     */
    skip?: number
    distinct?: PeriodoScalarFieldEnum | PeriodoScalarFieldEnum[]
  }

  /**
   * Periodo create
   */
  export type PeriodoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to create a Periodo.
     */
    data: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
  }

  /**
   * Periodo createMany
   */
  export type PeriodoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo createManyAndReturn
   */
  export type PeriodoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Periodos.
     */
    data: PeriodoCreateManyInput | PeriodoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Periodo update
   */
  export type PeriodoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The data needed to update a Periodo.
     */
    data: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
    /**
     * Choose, which Periodo to update.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo updateMany
   */
  export type PeriodoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periodos.
     */
    data: XOR<PeriodoUpdateManyMutationInput, PeriodoUncheckedUpdateManyInput>
    /**
     * Filter which Periodos to update
     */
    where?: PeriodoWhereInput
  }

  /**
   * Periodo upsert
   */
  export type PeriodoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * The filter to search for the Periodo to update in case it exists.
     */
    where: PeriodoWhereUniqueInput
    /**
     * In case the Periodo found by the `where` argument doesn't exist, create a new Periodo with this data.
     */
    create: XOR<PeriodoCreateInput, PeriodoUncheckedCreateInput>
    /**
     * In case the Periodo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodoUpdateInput, PeriodoUncheckedUpdateInput>
  }

  /**
   * Periodo delete
   */
  export type PeriodoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
    /**
     * Filter which Periodo to delete.
     */
    where: PeriodoWhereUniqueInput
  }

  /**
   * Periodo deleteMany
   */
  export type PeriodoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periodos to delete
     */
    where?: PeriodoWhereInput
  }

  /**
   * Periodo.cursos
   */
  export type Periodo$cursosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curso
     */
    select?: CursoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CursoInclude<ExtArgs> | null
    where?: CursoWhereInput
    orderBy?: CursoOrderByWithRelationInput | CursoOrderByWithRelationInput[]
    cursor?: CursoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CursoScalarFieldEnum | CursoScalarFieldEnum[]
  }

  /**
   * Periodo without action
   */
  export type PeriodoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Periodo
     */
    select?: PeriodoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CarreraScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    facultad: 'facultad'
  };

  export type CarreraScalarFieldEnum = (typeof CarreraScalarFieldEnum)[keyof typeof CarreraScalarFieldEnum]


  export const EstudianteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    fecha_nacimiento: 'fecha_nacimiento',
    carrera_id: 'carrera_id',
    apellido: 'apellido'
  };

  export type EstudianteScalarFieldEnum = (typeof EstudianteScalarFieldEnum)[keyof typeof EstudianteScalarFieldEnum]


  export const ProfesorScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    correo: 'correo',
    carrera_id: 'carrera_id'
  };

  export type ProfesorScalarFieldEnum = (typeof ProfesorScalarFieldEnum)[keyof typeof ProfesorScalarFieldEnum]


  export const MateriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo',
    carrera_id: 'carrera_id',
    profesor_id: 'profesor_id'
  };

  export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum]


  export const CursoScalarFieldEnum: {
    id: 'id',
    materia_id: 'materia_id',
    periodo_id: 'periodo_id',
    cupo: 'cupo',
    horario: 'horario'
  };

  export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum]


  export const TituloScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    profesor_id: 'profesor_id'
  };

  export type TituloScalarFieldEnum = (typeof TituloScalarFieldEnum)[keyof typeof TituloScalarFieldEnum]


  export const InscripcionScalarFieldEnum: {
    id: 'id',
    estudiante_id: 'estudiante_id',
    curso_id: 'curso_id',
    fecha_inscripcion: 'fecha_inscripcion',
    estado: 'estado'
  };

  export type InscripcionScalarFieldEnum = (typeof InscripcionScalarFieldEnum)[keyof typeof InscripcionScalarFieldEnum]


  export const PeriodoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin'
  };

  export type PeriodoScalarFieldEnum = (typeof PeriodoScalarFieldEnum)[keyof typeof PeriodoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CarreraWhereInput = {
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    id?: IntFilter<"Carrera"> | number
    nombre?: StringFilter<"Carrera"> | string
    facultad?: StringFilter<"Carrera"> | string
    estudiantes?: EstudianteListRelationFilter
    materias?: MateriaListRelationFilter
    profesores?: ProfesorListRelationFilter
  }

  export type CarreraOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad?: SortOrder
    estudiantes?: EstudianteOrderByRelationAggregateInput
    materias?: MateriaOrderByRelationAggregateInput
    profesores?: ProfesorOrderByRelationAggregateInput
  }

  export type CarreraWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CarreraWhereInput | CarreraWhereInput[]
    OR?: CarreraWhereInput[]
    NOT?: CarreraWhereInput | CarreraWhereInput[]
    nombre?: StringFilter<"Carrera"> | string
    facultad?: StringFilter<"Carrera"> | string
    estudiantes?: EstudianteListRelationFilter
    materias?: MateriaListRelationFilter
    profesores?: ProfesorListRelationFilter
  }, "id">

  export type CarreraOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad?: SortOrder
    _count?: CarreraCountOrderByAggregateInput
    _avg?: CarreraAvgOrderByAggregateInput
    _max?: CarreraMaxOrderByAggregateInput
    _min?: CarreraMinOrderByAggregateInput
    _sum?: CarreraSumOrderByAggregateInput
  }

  export type CarreraScalarWhereWithAggregatesInput = {
    AND?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    OR?: CarreraScalarWhereWithAggregatesInput[]
    NOT?: CarreraScalarWhereWithAggregatesInput | CarreraScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrera"> | number
    nombre?: StringWithAggregatesFilter<"Carrera"> | string
    facultad?: StringWithAggregatesFilter<"Carrera"> | string
  }

  export type EstudianteWhereInput = {
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    correo?: StringFilter<"Estudiante"> | string
    fecha_nacimiento?: DateTimeFilter<"Estudiante"> | Date | string
    carrera_id?: IntFilter<"Estudiante"> | number
    apellido?: StringFilter<"Estudiante"> | string
    carrera?: XOR<CarreraRelationFilter, CarreraWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }

  export type EstudianteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    fecha_nacimiento?: SortOrder
    carrera_id?: SortOrder
    apellido?: SortOrder
    carrera?: CarreraOrderByWithRelationInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
  }

  export type EstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: EstudianteWhereInput | EstudianteWhereInput[]
    OR?: EstudianteWhereInput[]
    NOT?: EstudianteWhereInput | EstudianteWhereInput[]
    nombre?: StringFilter<"Estudiante"> | string
    fecha_nacimiento?: DateTimeFilter<"Estudiante"> | Date | string
    carrera_id?: IntFilter<"Estudiante"> | number
    apellido?: StringFilter<"Estudiante"> | string
    carrera?: XOR<CarreraRelationFilter, CarreraWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }, "id" | "correo">

  export type EstudianteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    fecha_nacimiento?: SortOrder
    carrera_id?: SortOrder
    apellido?: SortOrder
    _count?: EstudianteCountOrderByAggregateInput
    _avg?: EstudianteAvgOrderByAggregateInput
    _max?: EstudianteMaxOrderByAggregateInput
    _min?: EstudianteMinOrderByAggregateInput
    _sum?: EstudianteSumOrderByAggregateInput
  }

  export type EstudianteScalarWhereWithAggregatesInput = {
    AND?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    OR?: EstudianteScalarWhereWithAggregatesInput[]
    NOT?: EstudianteScalarWhereWithAggregatesInput | EstudianteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Estudiante"> | number
    nombre?: StringWithAggregatesFilter<"Estudiante"> | string
    correo?: StringWithAggregatesFilter<"Estudiante"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"Estudiante"> | Date | string
    carrera_id?: IntWithAggregatesFilter<"Estudiante"> | number
    apellido?: StringWithAggregatesFilter<"Estudiante"> | string
  }

  export type ProfesorWhereInput = {
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    id?: IntFilter<"Profesor"> | number
    nombre?: StringFilter<"Profesor"> | string
    correo?: StringFilter<"Profesor"> | string
    carrera_id?: IntFilter<"Profesor"> | number
    materias?: MateriaListRelationFilter
    carrera?: XOR<CarreraRelationFilter, CarreraWhereInput>
    titulos?: TituloListRelationFilter
  }

  export type ProfesorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    carrera_id?: SortOrder
    materias?: MateriaOrderByRelationAggregateInput
    carrera?: CarreraOrderByWithRelationInput
    titulos?: TituloOrderByRelationAggregateInput
  }

  export type ProfesorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo?: string
    AND?: ProfesorWhereInput | ProfesorWhereInput[]
    OR?: ProfesorWhereInput[]
    NOT?: ProfesorWhereInput | ProfesorWhereInput[]
    nombre?: StringFilter<"Profesor"> | string
    carrera_id?: IntFilter<"Profesor"> | number
    materias?: MateriaListRelationFilter
    carrera?: XOR<CarreraRelationFilter, CarreraWhereInput>
    titulos?: TituloListRelationFilter
  }, "id" | "correo">

  export type ProfesorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    carrera_id?: SortOrder
    _count?: ProfesorCountOrderByAggregateInput
    _avg?: ProfesorAvgOrderByAggregateInput
    _max?: ProfesorMaxOrderByAggregateInput
    _min?: ProfesorMinOrderByAggregateInput
    _sum?: ProfesorSumOrderByAggregateInput
  }

  export type ProfesorScalarWhereWithAggregatesInput = {
    AND?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    OR?: ProfesorScalarWhereWithAggregatesInput[]
    NOT?: ProfesorScalarWhereWithAggregatesInput | ProfesorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profesor"> | number
    nombre?: StringWithAggregatesFilter<"Profesor"> | string
    correo?: StringWithAggregatesFilter<"Profesor"> | string
    carrera_id?: IntWithAggregatesFilter<"Profesor"> | number
  }

  export type MateriaWhereInput = {
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    codigo?: StringFilter<"Materia"> | string
    carrera_id?: IntFilter<"Materia"> | number
    profesor_id?: IntFilter<"Materia"> | number
    cursos?: CursoListRelationFilter
    carrera?: XOR<CarreraRelationFilter, CarreraWhereInput>
    profesor?: XOR<ProfesorRelationFilter, ProfesorWhereInput>
  }

  export type MateriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
    carrera?: CarreraOrderByWithRelationInput
    profesor?: ProfesorOrderByWithRelationInput
  }

  export type MateriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: MateriaWhereInput | MateriaWhereInput[]
    OR?: MateriaWhereInput[]
    NOT?: MateriaWhereInput | MateriaWhereInput[]
    nombre?: StringFilter<"Materia"> | string
    carrera_id?: IntFilter<"Materia"> | number
    profesor_id?: IntFilter<"Materia"> | number
    cursos?: CursoListRelationFilter
    carrera?: XOR<CarreraRelationFilter, CarreraWhereInput>
    profesor?: XOR<ProfesorRelationFilter, ProfesorWhereInput>
  }, "id" | "codigo">

  export type MateriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
    _count?: MateriaCountOrderByAggregateInput
    _avg?: MateriaAvgOrderByAggregateInput
    _max?: MateriaMaxOrderByAggregateInput
    _min?: MateriaMinOrderByAggregateInput
    _sum?: MateriaSumOrderByAggregateInput
  }

  export type MateriaScalarWhereWithAggregatesInput = {
    AND?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    OR?: MateriaScalarWhereWithAggregatesInput[]
    NOT?: MateriaScalarWhereWithAggregatesInput | MateriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Materia"> | number
    nombre?: StringWithAggregatesFilter<"Materia"> | string
    codigo?: StringWithAggregatesFilter<"Materia"> | string
    carrera_id?: IntWithAggregatesFilter<"Materia"> | number
    profesor_id?: IntWithAggregatesFilter<"Materia"> | number
  }

  export type CursoWhereInput = {
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    id?: IntFilter<"Curso"> | number
    materia_id?: IntFilter<"Curso"> | number
    periodo_id?: IntFilter<"Curso"> | number
    cupo?: IntFilter<"Curso"> | number
    horario?: StringFilter<"Curso"> | string
    materia?: XOR<MateriaRelationFilter, MateriaWhereInput>
    periodo?: XOR<PeriodoRelationFilter, PeriodoWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }

  export type CursoOrderByWithRelationInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
    horario?: SortOrder
    materia?: MateriaOrderByWithRelationInput
    periodo?: PeriodoOrderByWithRelationInput
    inscripciones?: InscripcionOrderByRelationAggregateInput
  }

  export type CursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CursoWhereInput | CursoWhereInput[]
    OR?: CursoWhereInput[]
    NOT?: CursoWhereInput | CursoWhereInput[]
    materia_id?: IntFilter<"Curso"> | number
    periodo_id?: IntFilter<"Curso"> | number
    cupo?: IntFilter<"Curso"> | number
    horario?: StringFilter<"Curso"> | string
    materia?: XOR<MateriaRelationFilter, MateriaWhereInput>
    periodo?: XOR<PeriodoRelationFilter, PeriodoWhereInput>
    inscripciones?: InscripcionListRelationFilter
  }, "id">

  export type CursoOrderByWithAggregationInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
    horario?: SortOrder
    _count?: CursoCountOrderByAggregateInput
    _avg?: CursoAvgOrderByAggregateInput
    _max?: CursoMaxOrderByAggregateInput
    _min?: CursoMinOrderByAggregateInput
    _sum?: CursoSumOrderByAggregateInput
  }

  export type CursoScalarWhereWithAggregatesInput = {
    AND?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    OR?: CursoScalarWhereWithAggregatesInput[]
    NOT?: CursoScalarWhereWithAggregatesInput | CursoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curso"> | number
    materia_id?: IntWithAggregatesFilter<"Curso"> | number
    periodo_id?: IntWithAggregatesFilter<"Curso"> | number
    cupo?: IntWithAggregatesFilter<"Curso"> | number
    horario?: StringWithAggregatesFilter<"Curso"> | string
  }

  export type TituloWhereInput = {
    AND?: TituloWhereInput | TituloWhereInput[]
    OR?: TituloWhereInput[]
    NOT?: TituloWhereInput | TituloWhereInput[]
    id?: IntFilter<"Titulo"> | number
    nombre?: StringFilter<"Titulo"> | string
    profesor_id?: IntFilter<"Titulo"> | number
    profesor?: XOR<ProfesorRelationFilter, ProfesorWhereInput>
  }

  export type TituloOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    profesor_id?: SortOrder
    profesor?: ProfesorOrderByWithRelationInput
  }

  export type TituloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TituloWhereInput | TituloWhereInput[]
    OR?: TituloWhereInput[]
    NOT?: TituloWhereInput | TituloWhereInput[]
    nombre?: StringFilter<"Titulo"> | string
    profesor_id?: IntFilter<"Titulo"> | number
    profesor?: XOR<ProfesorRelationFilter, ProfesorWhereInput>
  }, "id">

  export type TituloOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    profesor_id?: SortOrder
    _count?: TituloCountOrderByAggregateInput
    _avg?: TituloAvgOrderByAggregateInput
    _max?: TituloMaxOrderByAggregateInput
    _min?: TituloMinOrderByAggregateInput
    _sum?: TituloSumOrderByAggregateInput
  }

  export type TituloScalarWhereWithAggregatesInput = {
    AND?: TituloScalarWhereWithAggregatesInput | TituloScalarWhereWithAggregatesInput[]
    OR?: TituloScalarWhereWithAggregatesInput[]
    NOT?: TituloScalarWhereWithAggregatesInput | TituloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Titulo"> | number
    nombre?: StringWithAggregatesFilter<"Titulo"> | string
    profesor_id?: IntWithAggregatesFilter<"Titulo"> | number
  }

  export type InscripcionWhereInput = {
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    estudiante_id?: IntFilter<"Inscripcion"> | number
    curso_id?: IntFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeFilter<"Inscripcion"> | Date | string
    estado?: StringFilter<"Inscripcion"> | string
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
    estudiante?: XOR<EstudianteRelationFilter, EstudianteWhereInput>
  }

  export type InscripcionOrderByWithRelationInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    curso?: CursoOrderByWithRelationInput
    estudiante?: EstudianteOrderByWithRelationInput
  }

  export type InscripcionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InscripcionWhereInput | InscripcionWhereInput[]
    OR?: InscripcionWhereInput[]
    NOT?: InscripcionWhereInput | InscripcionWhereInput[]
    estudiante_id?: IntFilter<"Inscripcion"> | number
    curso_id?: IntFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeFilter<"Inscripcion"> | Date | string
    estado?: StringFilter<"Inscripcion"> | string
    curso?: XOR<CursoRelationFilter, CursoWhereInput>
    estudiante?: XOR<EstudianteRelationFilter, EstudianteWhereInput>
  }, "id">

  export type InscripcionOrderByWithAggregationInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    _count?: InscripcionCountOrderByAggregateInput
    _avg?: InscripcionAvgOrderByAggregateInput
    _max?: InscripcionMaxOrderByAggregateInput
    _min?: InscripcionMinOrderByAggregateInput
    _sum?: InscripcionSumOrderByAggregateInput
  }

  export type InscripcionScalarWhereWithAggregatesInput = {
    AND?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    OR?: InscripcionScalarWhereWithAggregatesInput[]
    NOT?: InscripcionScalarWhereWithAggregatesInput | InscripcionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inscripcion"> | number
    estudiante_id?: IntWithAggregatesFilter<"Inscripcion"> | number
    curso_id?: IntWithAggregatesFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"Inscripcion"> | Date | string
    estado?: StringWithAggregatesFilter<"Inscripcion"> | string
  }

  export type PeriodoWhereInput = {
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    id?: IntFilter<"Periodo"> | number
    nombre?: StringFilter<"Periodo"> | string
    fecha_inicio?: DateTimeFilter<"Periodo"> | Date | string
    fecha_fin?: DateTimeFilter<"Periodo"> | Date | string
    cursos?: CursoListRelationFilter
  }

  export type PeriodoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    cursos?: CursoOrderByRelationAggregateInput
  }

  export type PeriodoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PeriodoWhereInput | PeriodoWhereInput[]
    OR?: PeriodoWhereInput[]
    NOT?: PeriodoWhereInput | PeriodoWhereInput[]
    nombre?: StringFilter<"Periodo"> | string
    fecha_inicio?: DateTimeFilter<"Periodo"> | Date | string
    fecha_fin?: DateTimeFilter<"Periodo"> | Date | string
    cursos?: CursoListRelationFilter
  }, "id">

  export type PeriodoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    _count?: PeriodoCountOrderByAggregateInput
    _avg?: PeriodoAvgOrderByAggregateInput
    _max?: PeriodoMaxOrderByAggregateInput
    _min?: PeriodoMinOrderByAggregateInput
    _sum?: PeriodoSumOrderByAggregateInput
  }

  export type PeriodoScalarWhereWithAggregatesInput = {
    AND?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    OR?: PeriodoScalarWhereWithAggregatesInput[]
    NOT?: PeriodoScalarWhereWithAggregatesInput | PeriodoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Periodo"> | number
    nombre?: StringWithAggregatesFilter<"Periodo"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"Periodo"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"Periodo"> | Date | string
  }

  export type CarreraCreateInput = {
    nombre: string
    facultad: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarreraInput
    profesores?: ProfesorCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateInput = {
    id?: number
    nombre: string
    facultad: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
    profesores?: ProfesorUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
    profesores?: ProfesorUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
    profesores?: ProfesorUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraCreateManyInput = {
    id?: number
    nombre: string
    facultad: string
  }

  export type CarreraUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
  }

  export type CarreraUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteCreateInput = {
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    apellido: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    carrera_id: number
    apellido: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    apellido?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    apellido?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    carrera_id: number
    apellido: string
  }

  export type EstudianteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    apellido?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    apellido?: StringFieldUpdateOperationsInput | string
  }

  export type ProfesorCreateInput = {
    nombre: string
    correo: string
    materias?: MateriaCreateNestedManyWithoutProfesorInput
    carrera: CarreraCreateNestedOneWithoutProfesoresInput
    titulos?: TituloCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateInput = {
    id?: number
    nombre: string
    correo: string
    carrera_id: number
    materias?: MateriaUncheckedCreateNestedManyWithoutProfesorInput
    titulos?: TituloUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutProfesorNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutProfesoresNestedInput
    titulos?: TituloUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUncheckedUpdateManyWithoutProfesorNestedInput
    titulos?: TituloUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorCreateManyInput = {
    id?: number
    nombre: string
    correo: string
    carrera_id: number
  }

  export type ProfesorUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type ProfesorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
  }

  export type MateriaCreateInput = {
    nombre: string
    codigo: string
    cursos?: CursoCreateNestedManyWithoutMateriaInput
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    profesor: ProfesorCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo: string
    carrera_id: number
    profesor_id: number
    cursos?: CursoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutMateriaNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    profesor?: ProfesorUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    profesor_id?: IntFieldUpdateOperationsInput | number
    cursos?: CursoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaCreateManyInput = {
    id?: number
    nombre: string
    codigo: string
    carrera_id: number
    profesor_id: number
  }

  export type MateriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    profesor_id?: IntFieldUpdateOperationsInput | number
  }

  export type CursoCreateInput = {
    cupo: number
    horario: string
    materia: MateriaCreateNestedOneWithoutCursosInput
    periodo: PeriodoCreateNestedOneWithoutCursosInput
    inscripciones?: InscripcionCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateInput = {
    id?: number
    materia_id: number
    periodo_id: number
    cupo: number
    horario: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoUpdateInput = {
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    materia?: MateriaUpdateOneRequiredWithoutCursosNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutCursosNestedInput
    inscripciones?: InscripcionUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    materia_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoCreateManyInput = {
    id?: number
    materia_id: number
    periodo_id: number
    cupo: number
    horario: string
  }

  export type CursoUpdateManyMutationInput = {
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type CursoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    materia_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type TituloCreateInput = {
    nombre: string
    profesor: ProfesorCreateNestedOneWithoutTitulosInput
  }

  export type TituloUncheckedCreateInput = {
    id?: number
    nombre: string
    profesor_id: number
  }

  export type TituloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    profesor?: ProfesorUpdateOneRequiredWithoutTitulosNestedInput
  }

  export type TituloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    profesor_id?: IntFieldUpdateOperationsInput | number
  }

  export type TituloCreateManyInput = {
    id?: number
    nombre: string
    profesor_id: number
  }

  export type TituloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TituloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    profesor_id?: IntFieldUpdateOperationsInput | number
  }

  export type InscripcionCreateInput = {
    fecha_inscripcion: Date | string
    estado: string
    curso: CursoCreateNestedOneWithoutInscripcionesInput
    estudiante: EstudianteCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateInput = {
    id?: number
    estudiante_id: number
    curso_id: number
    fecha_inscripcion: Date | string
    estado: string
  }

  export type InscripcionUpdateInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutInscripcionesNestedInput
    estudiante?: EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudiante_id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionCreateManyInput = {
    id?: number
    estudiante_id: number
    curso_id: number
    fecha_inscripcion: Date | string
    estado: string
  }

  export type InscripcionUpdateManyMutationInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudiante_id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type PeriodoCreateInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cursos?: CursoCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUncheckedCreateInput = {
    id?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cursos?: CursoUncheckedCreateNestedManyWithoutPeriodoInput
  }

  export type PeriodoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: CursoUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cursos?: CursoUncheckedUpdateManyWithoutPeriodoNestedInput
  }

  export type PeriodoCreateManyInput = {
    id?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type PeriodoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EstudianteListRelationFilter = {
    every?: EstudianteWhereInput
    some?: EstudianteWhereInput
    none?: EstudianteWhereInput
  }

  export type MateriaListRelationFilter = {
    every?: MateriaWhereInput
    some?: MateriaWhereInput
    none?: MateriaWhereInput
  }

  export type ProfesorListRelationFilter = {
    every?: ProfesorWhereInput
    some?: ProfesorWhereInput
    none?: ProfesorWhereInput
  }

  export type EstudianteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfesorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarreraCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad?: SortOrder
  }

  export type CarreraAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarreraMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad?: SortOrder
  }

  export type CarreraMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    facultad?: SortOrder
  }

  export type CarreraSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CarreraRelationFilter = {
    is?: CarreraWhereInput
    isNot?: CarreraWhereInput
  }

  export type InscripcionListRelationFilter = {
    every?: InscripcionWhereInput
    some?: InscripcionWhereInput
    none?: InscripcionWhereInput
  }

  export type InscripcionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudianteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    fecha_nacimiento?: SortOrder
    carrera_id?: SortOrder
    apellido?: SortOrder
  }

  export type EstudianteAvgOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
  }

  export type EstudianteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    fecha_nacimiento?: SortOrder
    carrera_id?: SortOrder
    apellido?: SortOrder
  }

  export type EstudianteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    fecha_nacimiento?: SortOrder
    carrera_id?: SortOrder
    apellido?: SortOrder
  }

  export type EstudianteSumOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TituloListRelationFilter = {
    every?: TituloWhereInput
    some?: TituloWhereInput
    none?: TituloWhereInput
  }

  export type TituloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfesorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    carrera_id?: SortOrder
  }

  export type ProfesorAvgOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
  }

  export type ProfesorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    carrera_id?: SortOrder
  }

  export type ProfesorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    carrera_id?: SortOrder
  }

  export type ProfesorSumOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
  }

  export type CursoListRelationFilter = {
    every?: CursoWhereInput
    some?: CursoWhereInput
    none?: CursoWhereInput
  }

  export type ProfesorRelationFilter = {
    is?: ProfesorWhereInput
    isNot?: ProfesorWhereInput
  }

  export type CursoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MateriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
  }

  export type MateriaAvgOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
  }

  export type MateriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
  }

  export type MateriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
  }

  export type MateriaSumOrderByAggregateInput = {
    id?: SortOrder
    carrera_id?: SortOrder
    profesor_id?: SortOrder
  }

  export type MateriaRelationFilter = {
    is?: MateriaWhereInput
    isNot?: MateriaWhereInput
  }

  export type PeriodoRelationFilter = {
    is?: PeriodoWhereInput
    isNot?: PeriodoWhereInput
  }

  export type CursoCountOrderByAggregateInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
    horario?: SortOrder
  }

  export type CursoAvgOrderByAggregateInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
  }

  export type CursoMaxOrderByAggregateInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
    horario?: SortOrder
  }

  export type CursoMinOrderByAggregateInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
    horario?: SortOrder
  }

  export type CursoSumOrderByAggregateInput = {
    id?: SortOrder
    materia_id?: SortOrder
    periodo_id?: SortOrder
    cupo?: SortOrder
  }

  export type TituloCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    profesor_id?: SortOrder
  }

  export type TituloAvgOrderByAggregateInput = {
    id?: SortOrder
    profesor_id?: SortOrder
  }

  export type TituloMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    profesor_id?: SortOrder
  }

  export type TituloMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    profesor_id?: SortOrder
  }

  export type TituloSumOrderByAggregateInput = {
    id?: SortOrder
    profesor_id?: SortOrder
  }

  export type CursoRelationFilter = {
    is?: CursoWhereInput
    isNot?: CursoWhereInput
  }

  export type EstudianteRelationFilter = {
    is?: EstudianteWhereInput
    isNot?: EstudianteWhereInput
  }

  export type InscripcionCountOrderByAggregateInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
  }

  export type InscripcionAvgOrderByAggregateInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
  }

  export type InscripcionMaxOrderByAggregateInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
  }

  export type InscripcionMinOrderByAggregateInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
  }

  export type InscripcionSumOrderByAggregateInput = {
    id?: SortOrder
    estudiante_id?: SortOrder
    curso_id?: SortOrder
  }

  export type PeriodoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type PeriodoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PeriodoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type PeriodoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
  }

  export type PeriodoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EstudianteCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type MateriaCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type ProfesorCreateNestedManyWithoutCarreraInput = {
    create?: XOR<ProfesorCreateWithoutCarreraInput, ProfesorUncheckedCreateWithoutCarreraInput> | ProfesorCreateWithoutCarreraInput[] | ProfesorUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ProfesorCreateOrConnectWithoutCarreraInput | ProfesorCreateOrConnectWithoutCarreraInput[]
    createMany?: ProfesorCreateManyCarreraInputEnvelope
    connect?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
  }

  export type EstudianteUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type ProfesorUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<ProfesorCreateWithoutCarreraInput, ProfesorUncheckedCreateWithoutCarreraInput> | ProfesorCreateWithoutCarreraInput[] | ProfesorUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ProfesorCreateOrConnectWithoutCarreraInput | ProfesorCreateOrConnectWithoutCarreraInput[]
    createMany?: ProfesorCreateManyCarreraInputEnvelope
    connect?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstudianteUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type MateriaUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type ProfesorUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<ProfesorCreateWithoutCarreraInput, ProfesorUncheckedCreateWithoutCarreraInput> | ProfesorCreateWithoutCarreraInput[] | ProfesorUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ProfesorCreateOrConnectWithoutCarreraInput | ProfesorCreateOrConnectWithoutCarreraInput[]
    upsert?: ProfesorUpsertWithWhereUniqueWithoutCarreraInput | ProfesorUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: ProfesorCreateManyCarreraInputEnvelope
    set?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    disconnect?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    delete?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    connect?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    update?: ProfesorUpdateWithWhereUniqueWithoutCarreraInput | ProfesorUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: ProfesorUpdateManyWithWhereWithoutCarreraInput | ProfesorUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: ProfesorScalarWhereInput | ProfesorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput> | EstudianteCreateWithoutCarreraInput[] | EstudianteUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: EstudianteCreateOrConnectWithoutCarreraInput | EstudianteCreateOrConnectWithoutCarreraInput[]
    upsert?: EstudianteUpsertWithWhereUniqueWithoutCarreraInput | EstudianteUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: EstudianteCreateManyCarreraInputEnvelope
    set?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    disconnect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    delete?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    connect?: EstudianteWhereUniqueInput | EstudianteWhereUniqueInput[]
    update?: EstudianteUpdateWithWhereUniqueWithoutCarreraInput | EstudianteUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: EstudianteUpdateManyWithWhereWithoutCarreraInput | EstudianteUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput> | MateriaCreateWithoutCarreraInput[] | MateriaUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutCarreraInput | MateriaCreateOrConnectWithoutCarreraInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutCarreraInput | MateriaUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MateriaCreateManyCarreraInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutCarreraInput | MateriaUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutCarreraInput | MateriaUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type ProfesorUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<ProfesorCreateWithoutCarreraInput, ProfesorUncheckedCreateWithoutCarreraInput> | ProfesorCreateWithoutCarreraInput[] | ProfesorUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ProfesorCreateOrConnectWithoutCarreraInput | ProfesorCreateOrConnectWithoutCarreraInput[]
    upsert?: ProfesorUpsertWithWhereUniqueWithoutCarreraInput | ProfesorUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: ProfesorCreateManyCarreraInputEnvelope
    set?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    disconnect?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    delete?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    connect?: ProfesorWhereUniqueInput | ProfesorWhereUniqueInput[]
    update?: ProfesorUpdateWithWhereUniqueWithoutCarreraInput | ProfesorUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: ProfesorUpdateManyWithWhereWithoutCarreraInput | ProfesorUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: ProfesorScalarWhereInput | ProfesorScalarWhereInput[]
  }

  export type CarreraCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
  }

  export type InscripcionCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarreraUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutEstudiantesInput
    upsert?: CarreraUpsertWithoutEstudiantesInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutEstudiantesInput, CarreraUpdateWithoutEstudiantesInput>, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type InscripcionUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput> | InscripcionCreateWithoutEstudianteInput[] | InscripcionUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutEstudianteInput | InscripcionCreateOrConnectWithoutEstudianteInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutEstudianteInput | InscripcionUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: InscripcionCreateManyEstudianteInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutEstudianteInput | InscripcionUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutEstudianteInput | InscripcionUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type MateriaCreateNestedManyWithoutProfesorInput = {
    create?: XOR<MateriaCreateWithoutProfesorInput, MateriaUncheckedCreateWithoutProfesorInput> | MateriaCreateWithoutProfesorInput[] | MateriaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutProfesorInput | MateriaCreateOrConnectWithoutProfesorInput[]
    createMany?: MateriaCreateManyProfesorInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type CarreraCreateNestedOneWithoutProfesoresInput = {
    create?: XOR<CarreraCreateWithoutProfesoresInput, CarreraUncheckedCreateWithoutProfesoresInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutProfesoresInput
    connect?: CarreraWhereUniqueInput
  }

  export type TituloCreateNestedManyWithoutProfesorInput = {
    create?: XOR<TituloCreateWithoutProfesorInput, TituloUncheckedCreateWithoutProfesorInput> | TituloCreateWithoutProfesorInput[] | TituloUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TituloCreateOrConnectWithoutProfesorInput | TituloCreateOrConnectWithoutProfesorInput[]
    createMany?: TituloCreateManyProfesorInputEnvelope
    connect?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
  }

  export type MateriaUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<MateriaCreateWithoutProfesorInput, MateriaUncheckedCreateWithoutProfesorInput> | MateriaCreateWithoutProfesorInput[] | MateriaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutProfesorInput | MateriaCreateOrConnectWithoutProfesorInput[]
    createMany?: MateriaCreateManyProfesorInputEnvelope
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
  }

  export type TituloUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: XOR<TituloCreateWithoutProfesorInput, TituloUncheckedCreateWithoutProfesorInput> | TituloCreateWithoutProfesorInput[] | TituloUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TituloCreateOrConnectWithoutProfesorInput | TituloCreateOrConnectWithoutProfesorInput[]
    createMany?: TituloCreateManyProfesorInputEnvelope
    connect?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
  }

  export type MateriaUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<MateriaCreateWithoutProfesorInput, MateriaUncheckedCreateWithoutProfesorInput> | MateriaCreateWithoutProfesorInput[] | MateriaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutProfesorInput | MateriaCreateOrConnectWithoutProfesorInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutProfesorInput | MateriaUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: MateriaCreateManyProfesorInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutProfesorInput | MateriaUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutProfesorInput | MateriaUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type CarreraUpdateOneRequiredWithoutProfesoresNestedInput = {
    create?: XOR<CarreraCreateWithoutProfesoresInput, CarreraUncheckedCreateWithoutProfesoresInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutProfesoresInput
    upsert?: CarreraUpsertWithoutProfesoresInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutProfesoresInput, CarreraUpdateWithoutProfesoresInput>, CarreraUncheckedUpdateWithoutProfesoresInput>
  }

  export type TituloUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<TituloCreateWithoutProfesorInput, TituloUncheckedCreateWithoutProfesorInput> | TituloCreateWithoutProfesorInput[] | TituloUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TituloCreateOrConnectWithoutProfesorInput | TituloCreateOrConnectWithoutProfesorInput[]
    upsert?: TituloUpsertWithWhereUniqueWithoutProfesorInput | TituloUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: TituloCreateManyProfesorInputEnvelope
    set?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    disconnect?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    delete?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    connect?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    update?: TituloUpdateWithWhereUniqueWithoutProfesorInput | TituloUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: TituloUpdateManyWithWhereWithoutProfesorInput | TituloUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: TituloScalarWhereInput | TituloScalarWhereInput[]
  }

  export type MateriaUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<MateriaCreateWithoutProfesorInput, MateriaUncheckedCreateWithoutProfesorInput> | MateriaCreateWithoutProfesorInput[] | MateriaUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: MateriaCreateOrConnectWithoutProfesorInput | MateriaCreateOrConnectWithoutProfesorInput[]
    upsert?: MateriaUpsertWithWhereUniqueWithoutProfesorInput | MateriaUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: MateriaCreateManyProfesorInputEnvelope
    set?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    disconnect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    delete?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    connect?: MateriaWhereUniqueInput | MateriaWhereUniqueInput[]
    update?: MateriaUpdateWithWhereUniqueWithoutProfesorInput | MateriaUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: MateriaUpdateManyWithWhereWithoutProfesorInput | MateriaUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
  }

  export type TituloUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: XOR<TituloCreateWithoutProfesorInput, TituloUncheckedCreateWithoutProfesorInput> | TituloCreateWithoutProfesorInput[] | TituloUncheckedCreateWithoutProfesorInput[]
    connectOrCreate?: TituloCreateOrConnectWithoutProfesorInput | TituloCreateOrConnectWithoutProfesorInput[]
    upsert?: TituloUpsertWithWhereUniqueWithoutProfesorInput | TituloUpsertWithWhereUniqueWithoutProfesorInput[]
    createMany?: TituloCreateManyProfesorInputEnvelope
    set?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    disconnect?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    delete?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    connect?: TituloWhereUniqueInput | TituloWhereUniqueInput[]
    update?: TituloUpdateWithWhereUniqueWithoutProfesorInput | TituloUpdateWithWhereUniqueWithoutProfesorInput[]
    updateMany?: TituloUpdateManyWithWhereWithoutProfesorInput | TituloUpdateManyWithWhereWithoutProfesorInput[]
    deleteMany?: TituloScalarWhereInput | TituloScalarWhereInput[]
  }

  export type CursoCreateNestedManyWithoutMateriaInput = {
    create?: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput> | CursoCreateWithoutMateriaInput[] | CursoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutMateriaInput | CursoCreateOrConnectWithoutMateriaInput[]
    createMany?: CursoCreateManyMateriaInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CarreraCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
  }

  export type ProfesorCreateNestedOneWithoutMateriasInput = {
    create?: XOR<ProfesorCreateWithoutMateriasInput, ProfesorUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutMateriasInput
    connect?: ProfesorWhereUniqueInput
  }

  export type CursoUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput> | CursoCreateWithoutMateriaInput[] | CursoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutMateriaInput | CursoCreateOrConnectWithoutMateriaInput[]
    createMany?: CursoCreateManyMateriaInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput> | CursoCreateWithoutMateriaInput[] | CursoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutMateriaInput | CursoCreateOrConnectWithoutMateriaInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutMateriaInput | CursoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: CursoCreateManyMateriaInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutMateriaInput | CursoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutMateriaInput | CursoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CarreraUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CarreraCreateOrConnectWithoutMateriasInput
    upsert?: CarreraUpsertWithoutMateriasInput
    connect?: CarreraWhereUniqueInput
    update?: XOR<XOR<CarreraUpdateToOneWithWhereWithoutMateriasInput, CarreraUpdateWithoutMateriasInput>, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type ProfesorUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<ProfesorCreateWithoutMateriasInput, ProfesorUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutMateriasInput
    upsert?: ProfesorUpsertWithoutMateriasInput
    connect?: ProfesorWhereUniqueInput
    update?: XOR<XOR<ProfesorUpdateToOneWithWhereWithoutMateriasInput, ProfesorUpdateWithoutMateriasInput>, ProfesorUncheckedUpdateWithoutMateriasInput>
  }

  export type CursoUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput> | CursoCreateWithoutMateriaInput[] | CursoUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutMateriaInput | CursoCreateOrConnectWithoutMateriaInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutMateriaInput | CursoUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: CursoCreateManyMateriaInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutMateriaInput | CursoUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutMateriaInput | CursoUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type MateriaCreateNestedOneWithoutCursosInput = {
    create?: XOR<MateriaCreateWithoutCursosInput, MateriaUncheckedCreateWithoutCursosInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutCursosInput
    connect?: MateriaWhereUniqueInput
  }

  export type PeriodoCreateNestedOneWithoutCursosInput = {
    create?: XOR<PeriodoCreateWithoutCursosInput, PeriodoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutCursosInput
    connect?: PeriodoWhereUniqueInput
  }

  export type InscripcionCreateNestedManyWithoutCursoInput = {
    create?: XOR<InscripcionCreateWithoutCursoInput, InscripcionUncheckedCreateWithoutCursoInput> | InscripcionCreateWithoutCursoInput[] | InscripcionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutCursoInput | InscripcionCreateOrConnectWithoutCursoInput[]
    createMany?: InscripcionCreateManyCursoInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type InscripcionUncheckedCreateNestedManyWithoutCursoInput = {
    create?: XOR<InscripcionCreateWithoutCursoInput, InscripcionUncheckedCreateWithoutCursoInput> | InscripcionCreateWithoutCursoInput[] | InscripcionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutCursoInput | InscripcionCreateOrConnectWithoutCursoInput[]
    createMany?: InscripcionCreateManyCursoInputEnvelope
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
  }

  export type MateriaUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<MateriaCreateWithoutCursosInput, MateriaUncheckedCreateWithoutCursosInput>
    connectOrCreate?: MateriaCreateOrConnectWithoutCursosInput
    upsert?: MateriaUpsertWithoutCursosInput
    connect?: MateriaWhereUniqueInput
    update?: XOR<XOR<MateriaUpdateToOneWithWhereWithoutCursosInput, MateriaUpdateWithoutCursosInput>, MateriaUncheckedUpdateWithoutCursosInput>
  }

  export type PeriodoUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<PeriodoCreateWithoutCursosInput, PeriodoUncheckedCreateWithoutCursosInput>
    connectOrCreate?: PeriodoCreateOrConnectWithoutCursosInput
    upsert?: PeriodoUpsertWithoutCursosInput
    connect?: PeriodoWhereUniqueInput
    update?: XOR<XOR<PeriodoUpdateToOneWithWhereWithoutCursosInput, PeriodoUpdateWithoutCursosInput>, PeriodoUncheckedUpdateWithoutCursosInput>
  }

  export type InscripcionUpdateManyWithoutCursoNestedInput = {
    create?: XOR<InscripcionCreateWithoutCursoInput, InscripcionUncheckedCreateWithoutCursoInput> | InscripcionCreateWithoutCursoInput[] | InscripcionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutCursoInput | InscripcionCreateOrConnectWithoutCursoInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutCursoInput | InscripcionUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: InscripcionCreateManyCursoInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutCursoInput | InscripcionUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutCursoInput | InscripcionUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type InscripcionUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: XOR<InscripcionCreateWithoutCursoInput, InscripcionUncheckedCreateWithoutCursoInput> | InscripcionCreateWithoutCursoInput[] | InscripcionUncheckedCreateWithoutCursoInput[]
    connectOrCreate?: InscripcionCreateOrConnectWithoutCursoInput | InscripcionCreateOrConnectWithoutCursoInput[]
    upsert?: InscripcionUpsertWithWhereUniqueWithoutCursoInput | InscripcionUpsertWithWhereUniqueWithoutCursoInput[]
    createMany?: InscripcionCreateManyCursoInputEnvelope
    set?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    disconnect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    delete?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    connect?: InscripcionWhereUniqueInput | InscripcionWhereUniqueInput[]
    update?: InscripcionUpdateWithWhereUniqueWithoutCursoInput | InscripcionUpdateWithWhereUniqueWithoutCursoInput[]
    updateMany?: InscripcionUpdateManyWithWhereWithoutCursoInput | InscripcionUpdateManyWithWhereWithoutCursoInput[]
    deleteMany?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
  }

  export type ProfesorCreateNestedOneWithoutTitulosInput = {
    create?: XOR<ProfesorCreateWithoutTitulosInput, ProfesorUncheckedCreateWithoutTitulosInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutTitulosInput
    connect?: ProfesorWhereUniqueInput
  }

  export type ProfesorUpdateOneRequiredWithoutTitulosNestedInput = {
    create?: XOR<ProfesorCreateWithoutTitulosInput, ProfesorUncheckedCreateWithoutTitulosInput>
    connectOrCreate?: ProfesorCreateOrConnectWithoutTitulosInput
    upsert?: ProfesorUpsertWithoutTitulosInput
    connect?: ProfesorWhereUniqueInput
    update?: XOR<XOR<ProfesorUpdateToOneWithWhereWithoutTitulosInput, ProfesorUpdateWithoutTitulosInput>, ProfesorUncheckedUpdateWithoutTitulosInput>
  }

  export type CursoCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<CursoCreateWithoutInscripcionesInput, CursoUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: CursoCreateOrConnectWithoutInscripcionesInput
    connect?: CursoWhereUniqueInput
  }

  export type EstudianteCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutInscripcionesInput
    connect?: EstudianteWhereUniqueInput
  }

  export type CursoUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<CursoCreateWithoutInscripcionesInput, CursoUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: CursoCreateOrConnectWithoutInscripcionesInput
    upsert?: CursoUpsertWithoutInscripcionesInput
    connect?: CursoWhereUniqueInput
    update?: XOR<XOR<CursoUpdateToOneWithWhereWithoutInscripcionesInput, CursoUpdateWithoutInscripcionesInput>, CursoUncheckedUpdateWithoutInscripcionesInput>
  }

  export type EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: EstudianteCreateOrConnectWithoutInscripcionesInput
    upsert?: EstudianteUpsertWithoutInscripcionesInput
    connect?: EstudianteWhereUniqueInput
    update?: XOR<XOR<EstudianteUpdateToOneWithWhereWithoutInscripcionesInput, EstudianteUpdateWithoutInscripcionesInput>, EstudianteUncheckedUpdateWithoutInscripcionesInput>
  }

  export type CursoCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<CursoCreateWithoutPeriodoInput, CursoUncheckedCreateWithoutPeriodoInput> | CursoCreateWithoutPeriodoInput[] | CursoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutPeriodoInput | CursoCreateOrConnectWithoutPeriodoInput[]
    createMany?: CursoCreateManyPeriodoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUncheckedCreateNestedManyWithoutPeriodoInput = {
    create?: XOR<CursoCreateWithoutPeriodoInput, CursoUncheckedCreateWithoutPeriodoInput> | CursoCreateWithoutPeriodoInput[] | CursoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutPeriodoInput | CursoCreateOrConnectWithoutPeriodoInput[]
    createMany?: CursoCreateManyPeriodoInputEnvelope
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
  }

  export type CursoUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<CursoCreateWithoutPeriodoInput, CursoUncheckedCreateWithoutPeriodoInput> | CursoCreateWithoutPeriodoInput[] | CursoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutPeriodoInput | CursoCreateOrConnectWithoutPeriodoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutPeriodoInput | CursoUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: CursoCreateManyPeriodoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutPeriodoInput | CursoUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutPeriodoInput | CursoUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type CursoUncheckedUpdateManyWithoutPeriodoNestedInput = {
    create?: XOR<CursoCreateWithoutPeriodoInput, CursoUncheckedCreateWithoutPeriodoInput> | CursoCreateWithoutPeriodoInput[] | CursoUncheckedCreateWithoutPeriodoInput[]
    connectOrCreate?: CursoCreateOrConnectWithoutPeriodoInput | CursoCreateOrConnectWithoutPeriodoInput[]
    upsert?: CursoUpsertWithWhereUniqueWithoutPeriodoInput | CursoUpsertWithWhereUniqueWithoutPeriodoInput[]
    createMany?: CursoCreateManyPeriodoInputEnvelope
    set?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    disconnect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    delete?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    connect?: CursoWhereUniqueInput | CursoWhereUniqueInput[]
    update?: CursoUpdateWithWhereUniqueWithoutPeriodoInput | CursoUpdateWithWhereUniqueWithoutPeriodoInput[]
    updateMany?: CursoUpdateManyWithWhereWithoutPeriodoInput | CursoUpdateManyWithWhereWithoutPeriodoInput[]
    deleteMany?: CursoScalarWhereInput | CursoScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EstudianteCreateWithoutCarreraInput = {
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    apellido: string
    inscripciones?: InscripcionCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    apellido: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudianteCreateOrConnectWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteCreateManyCarreraInputEnvelope = {
    data: EstudianteCreateManyCarreraInput | EstudianteCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MateriaCreateWithoutCarreraInput = {
    nombre: string
    codigo: string
    cursos?: CursoCreateNestedManyWithoutMateriaInput
    profesor: ProfesorCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    codigo: string
    profesor_id: number
    cursos?: CursoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaCreateManyCarreraInputEnvelope = {
    data: MateriaCreateManyCarreraInput | MateriaCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type ProfesorCreateWithoutCarreraInput = {
    nombre: string
    correo: string
    materias?: MateriaCreateNestedManyWithoutProfesorInput
    titulos?: TituloCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateWithoutCarreraInput = {
    id?: number
    nombre: string
    correo: string
    materias?: MateriaUncheckedCreateNestedManyWithoutProfesorInput
    titulos?: TituloUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorCreateOrConnectWithoutCarreraInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutCarreraInput, ProfesorUncheckedCreateWithoutCarreraInput>
  }

  export type ProfesorCreateManyCarreraInputEnvelope = {
    data: ProfesorCreateManyCarreraInput | ProfesorCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type EstudianteUpsertWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    update: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
    create: XOR<EstudianteCreateWithoutCarreraInput, EstudianteUncheckedCreateWithoutCarreraInput>
  }

  export type EstudianteUpdateWithWhereUniqueWithoutCarreraInput = {
    where: EstudianteWhereUniqueInput
    data: XOR<EstudianteUpdateWithoutCarreraInput, EstudianteUncheckedUpdateWithoutCarreraInput>
  }

  export type EstudianteUpdateManyWithWhereWithoutCarreraInput = {
    where: EstudianteScalarWhereInput
    data: XOR<EstudianteUpdateManyMutationInput, EstudianteUncheckedUpdateManyWithoutCarreraInput>
  }

  export type EstudianteScalarWhereInput = {
    AND?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    OR?: EstudianteScalarWhereInput[]
    NOT?: EstudianteScalarWhereInput | EstudianteScalarWhereInput[]
    id?: IntFilter<"Estudiante"> | number
    nombre?: StringFilter<"Estudiante"> | string
    correo?: StringFilter<"Estudiante"> | string
    fecha_nacimiento?: DateTimeFilter<"Estudiante"> | Date | string
    carrera_id?: IntFilter<"Estudiante"> | number
    apellido?: StringFilter<"Estudiante"> | string
  }

  export type MateriaUpsertWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
    create: XOR<MateriaCreateWithoutCarreraInput, MateriaUncheckedCreateWithoutCarreraInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutCarreraInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutCarreraInput, MateriaUncheckedUpdateWithoutCarreraInput>
  }

  export type MateriaUpdateManyWithWhereWithoutCarreraInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutCarreraInput>
  }

  export type MateriaScalarWhereInput = {
    AND?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    OR?: MateriaScalarWhereInput[]
    NOT?: MateriaScalarWhereInput | MateriaScalarWhereInput[]
    id?: IntFilter<"Materia"> | number
    nombre?: StringFilter<"Materia"> | string
    codigo?: StringFilter<"Materia"> | string
    carrera_id?: IntFilter<"Materia"> | number
    profesor_id?: IntFilter<"Materia"> | number
  }

  export type ProfesorUpsertWithWhereUniqueWithoutCarreraInput = {
    where: ProfesorWhereUniqueInput
    update: XOR<ProfesorUpdateWithoutCarreraInput, ProfesorUncheckedUpdateWithoutCarreraInput>
    create: XOR<ProfesorCreateWithoutCarreraInput, ProfesorUncheckedCreateWithoutCarreraInput>
  }

  export type ProfesorUpdateWithWhereUniqueWithoutCarreraInput = {
    where: ProfesorWhereUniqueInput
    data: XOR<ProfesorUpdateWithoutCarreraInput, ProfesorUncheckedUpdateWithoutCarreraInput>
  }

  export type ProfesorUpdateManyWithWhereWithoutCarreraInput = {
    where: ProfesorScalarWhereInput
    data: XOR<ProfesorUpdateManyMutationInput, ProfesorUncheckedUpdateManyWithoutCarreraInput>
  }

  export type ProfesorScalarWhereInput = {
    AND?: ProfesorScalarWhereInput | ProfesorScalarWhereInput[]
    OR?: ProfesorScalarWhereInput[]
    NOT?: ProfesorScalarWhereInput | ProfesorScalarWhereInput[]
    id?: IntFilter<"Profesor"> | number
    nombre?: StringFilter<"Profesor"> | string
    correo?: StringFilter<"Profesor"> | string
    carrera_id?: IntFilter<"Profesor"> | number
  }

  export type CarreraCreateWithoutEstudiantesInput = {
    nombre: string
    facultad: string
    materias?: MateriaCreateNestedManyWithoutCarreraInput
    profesores?: ProfesorCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutEstudiantesInput = {
    id?: number
    nombre: string
    facultad: string
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
    profesores?: ProfesorUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutEstudiantesInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
  }

  export type InscripcionCreateWithoutEstudianteInput = {
    fecha_inscripcion: Date | string
    estado: string
    curso: CursoCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutEstudianteInput = {
    id?: number
    curso_id: number
    fecha_inscripcion: Date | string
    estado: string
  }

  export type InscripcionCreateOrConnectWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionCreateManyEstudianteInputEnvelope = {
    data: InscripcionCreateManyEstudianteInput | InscripcionCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CarreraUpsertWithoutEstudiantesInput = {
    update: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<CarreraCreateWithoutEstudiantesInput, CarreraUncheckedCreateWithoutEstudiantesInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutEstudiantesInput, CarreraUncheckedUpdateWithoutEstudiantesInput>
  }

  export type CarreraUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
    profesores?: ProfesorUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutEstudiantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
    profesores?: ProfesorUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type InscripcionUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
    create: XOR<InscripcionCreateWithoutEstudianteInput, InscripcionUncheckedCreateWithoutEstudianteInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutEstudianteInput, InscripcionUncheckedUpdateWithoutEstudianteInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutEstudianteInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type InscripcionScalarWhereInput = {
    AND?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    OR?: InscripcionScalarWhereInput[]
    NOT?: InscripcionScalarWhereInput | InscripcionScalarWhereInput[]
    id?: IntFilter<"Inscripcion"> | number
    estudiante_id?: IntFilter<"Inscripcion"> | number
    curso_id?: IntFilter<"Inscripcion"> | number
    fecha_inscripcion?: DateTimeFilter<"Inscripcion"> | Date | string
    estado?: StringFilter<"Inscripcion"> | string
  }

  export type MateriaCreateWithoutProfesorInput = {
    nombre: string
    codigo: string
    cursos?: CursoCreateNestedManyWithoutMateriaInput
    carrera: CarreraCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutProfesorInput = {
    id?: number
    nombre: string
    codigo: string
    carrera_id: number
    cursos?: CursoUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MateriaCreateOrConnectWithoutProfesorInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutProfesorInput, MateriaUncheckedCreateWithoutProfesorInput>
  }

  export type MateriaCreateManyProfesorInputEnvelope = {
    data: MateriaCreateManyProfesorInput | MateriaCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type CarreraCreateWithoutProfesoresInput = {
    nombre: string
    facultad: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    materias?: MateriaCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutProfesoresInput = {
    id?: number
    nombre: string
    facultad: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    materias?: MateriaUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutProfesoresInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutProfesoresInput, CarreraUncheckedCreateWithoutProfesoresInput>
  }

  export type TituloCreateWithoutProfesorInput = {
    nombre: string
  }

  export type TituloUncheckedCreateWithoutProfesorInput = {
    id?: number
    nombre: string
  }

  export type TituloCreateOrConnectWithoutProfesorInput = {
    where: TituloWhereUniqueInput
    create: XOR<TituloCreateWithoutProfesorInput, TituloUncheckedCreateWithoutProfesorInput>
  }

  export type TituloCreateManyProfesorInputEnvelope = {
    data: TituloCreateManyProfesorInput | TituloCreateManyProfesorInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithWhereUniqueWithoutProfesorInput = {
    where: MateriaWhereUniqueInput
    update: XOR<MateriaUpdateWithoutProfesorInput, MateriaUncheckedUpdateWithoutProfesorInput>
    create: XOR<MateriaCreateWithoutProfesorInput, MateriaUncheckedCreateWithoutProfesorInput>
  }

  export type MateriaUpdateWithWhereUniqueWithoutProfesorInput = {
    where: MateriaWhereUniqueInput
    data: XOR<MateriaUpdateWithoutProfesorInput, MateriaUncheckedUpdateWithoutProfesorInput>
  }

  export type MateriaUpdateManyWithWhereWithoutProfesorInput = {
    where: MateriaScalarWhereInput
    data: XOR<MateriaUpdateManyMutationInput, MateriaUncheckedUpdateManyWithoutProfesorInput>
  }

  export type CarreraUpsertWithoutProfesoresInput = {
    update: XOR<CarreraUpdateWithoutProfesoresInput, CarreraUncheckedUpdateWithoutProfesoresInput>
    create: XOR<CarreraCreateWithoutProfesoresInput, CarreraUncheckedCreateWithoutProfesoresInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutProfesoresInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutProfesoresInput, CarreraUncheckedUpdateWithoutProfesoresInput>
  }

  export type CarreraUpdateWithoutProfesoresInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutProfesoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    materias?: MateriaUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type TituloUpsertWithWhereUniqueWithoutProfesorInput = {
    where: TituloWhereUniqueInput
    update: XOR<TituloUpdateWithoutProfesorInput, TituloUncheckedUpdateWithoutProfesorInput>
    create: XOR<TituloCreateWithoutProfesorInput, TituloUncheckedCreateWithoutProfesorInput>
  }

  export type TituloUpdateWithWhereUniqueWithoutProfesorInput = {
    where: TituloWhereUniqueInput
    data: XOR<TituloUpdateWithoutProfesorInput, TituloUncheckedUpdateWithoutProfesorInput>
  }

  export type TituloUpdateManyWithWhereWithoutProfesorInput = {
    where: TituloScalarWhereInput
    data: XOR<TituloUpdateManyMutationInput, TituloUncheckedUpdateManyWithoutProfesorInput>
  }

  export type TituloScalarWhereInput = {
    AND?: TituloScalarWhereInput | TituloScalarWhereInput[]
    OR?: TituloScalarWhereInput[]
    NOT?: TituloScalarWhereInput | TituloScalarWhereInput[]
    id?: IntFilter<"Titulo"> | number
    nombre?: StringFilter<"Titulo"> | string
    profesor_id?: IntFilter<"Titulo"> | number
  }

  export type CursoCreateWithoutMateriaInput = {
    cupo: number
    horario: string
    periodo: PeriodoCreateNestedOneWithoutCursosInput
    inscripciones?: InscripcionCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutMateriaInput = {
    id?: number
    periodo_id: number
    cupo: number
    horario: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutMateriaInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput>
  }

  export type CursoCreateManyMateriaInputEnvelope = {
    data: CursoCreateManyMateriaInput | CursoCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CarreraCreateWithoutMateriasInput = {
    nombre: string
    facultad: string
    estudiantes?: EstudianteCreateNestedManyWithoutCarreraInput
    profesores?: ProfesorCreateNestedManyWithoutCarreraInput
  }

  export type CarreraUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    facultad: string
    estudiantes?: EstudianteUncheckedCreateNestedManyWithoutCarreraInput
    profesores?: ProfesorUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CarreraCreateOrConnectWithoutMateriasInput = {
    where: CarreraWhereUniqueInput
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
  }

  export type ProfesorCreateWithoutMateriasInput = {
    nombre: string
    correo: string
    carrera: CarreraCreateNestedOneWithoutProfesoresInput
    titulos?: TituloCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorUncheckedCreateWithoutMateriasInput = {
    id?: number
    nombre: string
    correo: string
    carrera_id: number
    titulos?: TituloUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorCreateOrConnectWithoutMateriasInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutMateriasInput, ProfesorUncheckedCreateWithoutMateriasInput>
  }

  export type CursoUpsertWithWhereUniqueWithoutMateriaInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutMateriaInput, CursoUncheckedUpdateWithoutMateriaInput>
    create: XOR<CursoCreateWithoutMateriaInput, CursoUncheckedCreateWithoutMateriaInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutMateriaInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutMateriaInput, CursoUncheckedUpdateWithoutMateriaInput>
  }

  export type CursoUpdateManyWithWhereWithoutMateriaInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutMateriaInput>
  }

  export type CursoScalarWhereInput = {
    AND?: CursoScalarWhereInput | CursoScalarWhereInput[]
    OR?: CursoScalarWhereInput[]
    NOT?: CursoScalarWhereInput | CursoScalarWhereInput[]
    id?: IntFilter<"Curso"> | number
    materia_id?: IntFilter<"Curso"> | number
    periodo_id?: IntFilter<"Curso"> | number
    cupo?: IntFilter<"Curso"> | number
    horario?: StringFilter<"Curso"> | string
  }

  export type CarreraUpsertWithoutMateriasInput = {
    update: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
    create: XOR<CarreraCreateWithoutMateriasInput, CarreraUncheckedCreateWithoutMateriasInput>
    where?: CarreraWhereInput
  }

  export type CarreraUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CarreraWhereInput
    data: XOR<CarreraUpdateWithoutMateriasInput, CarreraUncheckedUpdateWithoutMateriasInput>
  }

  export type CarreraUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUpdateManyWithoutCarreraNestedInput
    profesores?: ProfesorUpdateManyWithoutCarreraNestedInput
  }

  export type CarreraUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    facultad?: StringFieldUpdateOperationsInput | string
    estudiantes?: EstudianteUncheckedUpdateManyWithoutCarreraNestedInput
    profesores?: ProfesorUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type ProfesorUpsertWithoutMateriasInput = {
    update: XOR<ProfesorUpdateWithoutMateriasInput, ProfesorUncheckedUpdateWithoutMateriasInput>
    create: XOR<ProfesorCreateWithoutMateriasInput, ProfesorUncheckedCreateWithoutMateriasInput>
    where?: ProfesorWhereInput
  }

  export type ProfesorUpdateToOneWithWhereWithoutMateriasInput = {
    where?: ProfesorWhereInput
    data: XOR<ProfesorUpdateWithoutMateriasInput, ProfesorUncheckedUpdateWithoutMateriasInput>
  }

  export type ProfesorUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutProfesoresNestedInput
    titulos?: TituloUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateWithoutMateriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    titulos?: TituloUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type MateriaCreateWithoutCursosInput = {
    nombre: string
    codigo: string
    carrera: CarreraCreateNestedOneWithoutMateriasInput
    profesor: ProfesorCreateNestedOneWithoutMateriasInput
  }

  export type MateriaUncheckedCreateWithoutCursosInput = {
    id?: number
    nombre: string
    codigo: string
    carrera_id: number
    profesor_id: number
  }

  export type MateriaCreateOrConnectWithoutCursosInput = {
    where: MateriaWhereUniqueInput
    create: XOR<MateriaCreateWithoutCursosInput, MateriaUncheckedCreateWithoutCursosInput>
  }

  export type PeriodoCreateWithoutCursosInput = {
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type PeriodoUncheckedCreateWithoutCursosInput = {
    id?: number
    nombre: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type PeriodoCreateOrConnectWithoutCursosInput = {
    where: PeriodoWhereUniqueInput
    create: XOR<PeriodoCreateWithoutCursosInput, PeriodoUncheckedCreateWithoutCursosInput>
  }

  export type InscripcionCreateWithoutCursoInput = {
    fecha_inscripcion: Date | string
    estado: string
    estudiante: EstudianteCreateNestedOneWithoutInscripcionesInput
  }

  export type InscripcionUncheckedCreateWithoutCursoInput = {
    id?: number
    estudiante_id: number
    fecha_inscripcion: Date | string
    estado: string
  }

  export type InscripcionCreateOrConnectWithoutCursoInput = {
    where: InscripcionWhereUniqueInput
    create: XOR<InscripcionCreateWithoutCursoInput, InscripcionUncheckedCreateWithoutCursoInput>
  }

  export type InscripcionCreateManyCursoInputEnvelope = {
    data: InscripcionCreateManyCursoInput | InscripcionCreateManyCursoInput[]
    skipDuplicates?: boolean
  }

  export type MateriaUpsertWithoutCursosInput = {
    update: XOR<MateriaUpdateWithoutCursosInput, MateriaUncheckedUpdateWithoutCursosInput>
    create: XOR<MateriaCreateWithoutCursosInput, MateriaUncheckedCreateWithoutCursosInput>
    where?: MateriaWhereInput
  }

  export type MateriaUpdateToOneWithWhereWithoutCursosInput = {
    where?: MateriaWhereInput
    data: XOR<MateriaUpdateWithoutCursosInput, MateriaUncheckedUpdateWithoutCursosInput>
  }

  export type MateriaUpdateWithoutCursosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
    profesor?: ProfesorUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    profesor_id?: IntFieldUpdateOperationsInput | number
  }

  export type PeriodoUpsertWithoutCursosInput = {
    update: XOR<PeriodoUpdateWithoutCursosInput, PeriodoUncheckedUpdateWithoutCursosInput>
    create: XOR<PeriodoCreateWithoutCursosInput, PeriodoUncheckedCreateWithoutCursosInput>
    where?: PeriodoWhereInput
  }

  export type PeriodoUpdateToOneWithWhereWithoutCursosInput = {
    where?: PeriodoWhereInput
    data: XOR<PeriodoUpdateWithoutCursosInput, PeriodoUncheckedUpdateWithoutCursosInput>
  }

  export type PeriodoUpdateWithoutCursosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodoUncheckedUpdateWithoutCursosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InscripcionUpsertWithWhereUniqueWithoutCursoInput = {
    where: InscripcionWhereUniqueInput
    update: XOR<InscripcionUpdateWithoutCursoInput, InscripcionUncheckedUpdateWithoutCursoInput>
    create: XOR<InscripcionCreateWithoutCursoInput, InscripcionUncheckedCreateWithoutCursoInput>
  }

  export type InscripcionUpdateWithWhereUniqueWithoutCursoInput = {
    where: InscripcionWhereUniqueInput
    data: XOR<InscripcionUpdateWithoutCursoInput, InscripcionUncheckedUpdateWithoutCursoInput>
  }

  export type InscripcionUpdateManyWithWhereWithoutCursoInput = {
    where: InscripcionScalarWhereInput
    data: XOR<InscripcionUpdateManyMutationInput, InscripcionUncheckedUpdateManyWithoutCursoInput>
  }

  export type ProfesorCreateWithoutTitulosInput = {
    nombre: string
    correo: string
    materias?: MateriaCreateNestedManyWithoutProfesorInput
    carrera: CarreraCreateNestedOneWithoutProfesoresInput
  }

  export type ProfesorUncheckedCreateWithoutTitulosInput = {
    id?: number
    nombre: string
    correo: string
    carrera_id: number
    materias?: MateriaUncheckedCreateNestedManyWithoutProfesorInput
  }

  export type ProfesorCreateOrConnectWithoutTitulosInput = {
    where: ProfesorWhereUniqueInput
    create: XOR<ProfesorCreateWithoutTitulosInput, ProfesorUncheckedCreateWithoutTitulosInput>
  }

  export type ProfesorUpsertWithoutTitulosInput = {
    update: XOR<ProfesorUpdateWithoutTitulosInput, ProfesorUncheckedUpdateWithoutTitulosInput>
    create: XOR<ProfesorCreateWithoutTitulosInput, ProfesorUncheckedCreateWithoutTitulosInput>
    where?: ProfesorWhereInput
  }

  export type ProfesorUpdateToOneWithWhereWithoutTitulosInput = {
    where?: ProfesorWhereInput
    data: XOR<ProfesorUpdateWithoutTitulosInput, ProfesorUncheckedUpdateWithoutTitulosInput>
  }

  export type ProfesorUpdateWithoutTitulosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutProfesorNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutProfesoresNestedInput
  }

  export type ProfesorUncheckedUpdateWithoutTitulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    materias?: MateriaUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type CursoCreateWithoutInscripcionesInput = {
    cupo: number
    horario: string
    materia: MateriaCreateNestedOneWithoutCursosInput
    periodo: PeriodoCreateNestedOneWithoutCursosInput
  }

  export type CursoUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    materia_id: number
    periodo_id: number
    cupo: number
    horario: string
  }

  export type CursoCreateOrConnectWithoutInscripcionesInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutInscripcionesInput, CursoUncheckedCreateWithoutInscripcionesInput>
  }

  export type EstudianteCreateWithoutInscripcionesInput = {
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    apellido: string
    carrera: CarreraCreateNestedOneWithoutEstudiantesInput
  }

  export type EstudianteUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    carrera_id: number
    apellido: string
  }

  export type EstudianteCreateOrConnectWithoutInscripcionesInput = {
    where: EstudianteWhereUniqueInput
    create: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
  }

  export type CursoUpsertWithoutInscripcionesInput = {
    update: XOR<CursoUpdateWithoutInscripcionesInput, CursoUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<CursoCreateWithoutInscripcionesInput, CursoUncheckedCreateWithoutInscripcionesInput>
    where?: CursoWhereInput
  }

  export type CursoUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: CursoWhereInput
    data: XOR<CursoUpdateWithoutInscripcionesInput, CursoUncheckedUpdateWithoutInscripcionesInput>
  }

  export type CursoUpdateWithoutInscripcionesInput = {
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    materia?: MateriaUpdateOneRequiredWithoutCursosNestedInput
    periodo?: PeriodoUpdateOneRequiredWithoutCursosNestedInput
  }

  export type CursoUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    materia_id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type EstudianteUpsertWithoutInscripcionesInput = {
    update: XOR<EstudianteUpdateWithoutInscripcionesInput, EstudianteUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<EstudianteCreateWithoutInscripcionesInput, EstudianteUncheckedCreateWithoutInscripcionesInput>
    where?: EstudianteWhereInput
  }

  export type EstudianteUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: EstudianteWhereInput
    data: XOR<EstudianteUpdateWithoutInscripcionesInput, EstudianteUncheckedUpdateWithoutInscripcionesInput>
  }

  export type EstudianteUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    apellido?: StringFieldUpdateOperationsInput | string
    carrera?: CarreraUpdateOneRequiredWithoutEstudiantesNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    apellido?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateWithoutPeriodoInput = {
    cupo: number
    horario: string
    materia: MateriaCreateNestedOneWithoutCursosInput
    inscripciones?: InscripcionCreateNestedManyWithoutCursoInput
  }

  export type CursoUncheckedCreateWithoutPeriodoInput = {
    id?: number
    materia_id: number
    cupo: number
    horario: string
    inscripciones?: InscripcionUncheckedCreateNestedManyWithoutCursoInput
  }

  export type CursoCreateOrConnectWithoutPeriodoInput = {
    where: CursoWhereUniqueInput
    create: XOR<CursoCreateWithoutPeriodoInput, CursoUncheckedCreateWithoutPeriodoInput>
  }

  export type CursoCreateManyPeriodoInputEnvelope = {
    data: CursoCreateManyPeriodoInput | CursoCreateManyPeriodoInput[]
    skipDuplicates?: boolean
  }

  export type CursoUpsertWithWhereUniqueWithoutPeriodoInput = {
    where: CursoWhereUniqueInput
    update: XOR<CursoUpdateWithoutPeriodoInput, CursoUncheckedUpdateWithoutPeriodoInput>
    create: XOR<CursoCreateWithoutPeriodoInput, CursoUncheckedCreateWithoutPeriodoInput>
  }

  export type CursoUpdateWithWhereUniqueWithoutPeriodoInput = {
    where: CursoWhereUniqueInput
    data: XOR<CursoUpdateWithoutPeriodoInput, CursoUncheckedUpdateWithoutPeriodoInput>
  }

  export type CursoUpdateManyWithWhereWithoutPeriodoInput = {
    where: CursoScalarWhereInput
    data: XOR<CursoUpdateManyMutationInput, CursoUncheckedUpdateManyWithoutPeriodoInput>
  }

  export type EstudianteCreateManyCarreraInput = {
    id?: number
    nombre: string
    correo: string
    fecha_nacimiento: Date | string
    apellido: string
  }

  export type MateriaCreateManyCarreraInput = {
    id?: number
    nombre: string
    codigo: string
    profesor_id: number
  }

  export type ProfesorCreateManyCarreraInput = {
    id?: number
    nombre: string
    correo: string
  }

  export type EstudianteUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    apellido?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    apellido?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudianteUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    apellido?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutMateriaNestedInput
    profesor?: ProfesorUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    profesor_id?: IntFieldUpdateOperationsInput | number
    cursos?: CursoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    profesor_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProfesorUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUpdateManyWithoutProfesorNestedInput
    titulos?: TituloUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    materias?: MateriaUncheckedUpdateManyWithoutProfesorNestedInput
    titulos?: TituloUncheckedUpdateManyWithoutProfesorNestedInput
  }

  export type ProfesorUncheckedUpdateManyWithoutCarreraInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionCreateManyEstudianteInput = {
    id?: number
    curso_id: number
    fecha_inscripcion: Date | string
    estado: string
  }

  export type InscripcionUpdateWithoutEstudianteInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    curso?: CursoUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionUncheckedUpdateManyWithoutEstudianteInput = {
    id?: IntFieldUpdateOperationsInput | number
    curso_id?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type MateriaCreateManyProfesorInput = {
    id?: number
    nombre: string
    codigo: string
    carrera_id: number
  }

  export type TituloCreateManyProfesorInput = {
    id?: number
    nombre: string
  }

  export type MateriaUpdateWithoutProfesorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    cursos?: CursoUpdateManyWithoutMateriaNestedInput
    carrera?: CarreraUpdateOneRequiredWithoutMateriasNestedInput
  }

  export type MateriaUncheckedUpdateWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
    cursos?: CursoUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MateriaUncheckedUpdateManyWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    carrera_id?: IntFieldUpdateOperationsInput | number
  }

  export type TituloUpdateWithoutProfesorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TituloUncheckedUpdateWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type TituloUncheckedUpdateManyWithoutProfesorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateManyMateriaInput = {
    id?: number
    periodo_id: number
    cupo: number
    horario: string
  }

  export type CursoUpdateWithoutMateriaInput = {
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    periodo?: PeriodoUpdateOneRequiredWithoutCursosNestedInput
    inscripciones?: InscripcionUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutMateriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    periodo_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionCreateManyCursoInput = {
    id?: number
    estudiante_id: number
    fecha_inscripcion: Date | string
    estado: string
  }

  export type InscripcionUpdateWithoutCursoInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    estudiante?: EstudianteUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type InscripcionUncheckedUpdateWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudiante_id?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type InscripcionUncheckedUpdateManyWithoutCursoInput = {
    id?: IntFieldUpdateOperationsInput | number
    estudiante_id?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type CursoCreateManyPeriodoInput = {
    id?: number
    materia_id: number
    cupo: number
    horario: string
  }

  export type CursoUpdateWithoutPeriodoInput = {
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    materia?: MateriaUpdateOneRequiredWithoutCursosNestedInput
    inscripciones?: InscripcionUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateWithoutPeriodoInput = {
    id?: IntFieldUpdateOperationsInput | number
    materia_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
    inscripciones?: InscripcionUncheckedUpdateManyWithoutCursoNestedInput
  }

  export type CursoUncheckedUpdateManyWithoutPeriodoInput = {
    id?: IntFieldUpdateOperationsInput | number
    materia_id?: IntFieldUpdateOperationsInput | number
    cupo?: IntFieldUpdateOperationsInput | number
    horario?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CarreraCountOutputTypeDefaultArgs instead
     */
    export type CarreraCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarreraCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstudianteCountOutputTypeDefaultArgs instead
     */
    export type EstudianteCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstudianteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfesorCountOutputTypeDefaultArgs instead
     */
    export type ProfesorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfesorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MateriaCountOutputTypeDefaultArgs instead
     */
    export type MateriaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MateriaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CursoCountOutputTypeDefaultArgs instead
     */
    export type CursoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CursoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeriodoCountOutputTypeDefaultArgs instead
     */
    export type PeriodoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeriodoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarreraDefaultArgs instead
     */
    export type CarreraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarreraDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstudianteDefaultArgs instead
     */
    export type EstudianteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstudianteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfesorDefaultArgs instead
     */
    export type ProfesorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfesorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MateriaDefaultArgs instead
     */
    export type MateriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MateriaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CursoDefaultArgs instead
     */
    export type CursoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CursoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TituloDefaultArgs instead
     */
    export type TituloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TituloDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InscripcionDefaultArgs instead
     */
    export type InscripcionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InscripcionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeriodoDefaultArgs instead
     */
    export type PeriodoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeriodoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}