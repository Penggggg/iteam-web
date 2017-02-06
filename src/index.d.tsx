/**全局环境变量 process.env.ENV */
declare var ENV: string;

/**webpack2 导入 */
declare var System: {
    import: ( fileName: string ) => Promise<any>
}