(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@ngrx/effects/schematics/ng-add/index", ["require", "exports", "@angular-devkit/schematics", "@angular-devkit/schematics/tasks", "typescript", "@ngrx/effects/schematics-core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const schematics_1 = require("@angular-devkit/schematics");
    const tasks_1 = require("@angular-devkit/schematics/tasks");
    const ts = require("typescript");
    const schematics_core_1 = require("@ngrx/effects/schematics-core");
    function addImportToNgModule(options) {
        return (host) => {
            const modulePath = options.module;
            if (!modulePath) {
                return host;
            }
            if (!host.exists(modulePath)) {
                throw new Error('Specified module does not exist');
            }
            const text = host.read(modulePath);
            if (text === null) {
                throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
            }
            const sourceText = text.toString('utf-8');
            const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
            const effectsName = `${schematics_core_1.stringUtils.classify(`${options.name}Effects`)}`;
            const effectsModuleImport = schematics_core_1.insertImport(source, modulePath, 'EffectsModule', '@ngrx/effects');
            const effectsPath = `/${options.path}/` +
                (options.flat ? '' : schematics_core_1.stringUtils.dasherize(options.name) + '/') +
                (options.group ? 'effects/' : '') +
                schematics_core_1.stringUtils.dasherize(options.name) +
                '.effects';
            const relativePath = schematics_core_1.buildRelativePath(modulePath, effectsPath);
            const effectsImport = schematics_core_1.insertImport(source, modulePath, effectsName, relativePath);
            const [effectsNgModuleImport] = schematics_core_1.addImportToModule(source, modulePath, `EffectsModule.forRoot([${effectsName}])`, relativePath);
            const changes = [effectsModuleImport, effectsImport, effectsNgModuleImport];
            const recorder = host.beginUpdate(modulePath);
            for (const change of changes) {
                if (change instanceof schematics_core_1.InsertChange) {
                    recorder.insertLeft(change.pos, change.toAdd);
                }
            }
            host.commitUpdate(recorder);
            return host;
        };
    }
    function addNgRxEffectsToPackageJson() {
        return (host, context) => {
            schematics_core_1.addPackageToPackageJson(host, 'dependencies', '@ngrx/effects', schematics_core_1.platformVersion);
            context.addTask(new tasks_1.NodePackageInstallTask());
            return host;
        };
    }
    function default_1(options) {
        return (host, context) => {
            options.path = schematics_core_1.getProjectPath(host, options);
            if (options.module) {
                options.module = schematics_core_1.findModuleFromOptions(host, options);
            }
            const parsedPath = schematics_core_1.parseName(options.path, options.name);
            options.name = parsedPath.name;
            options.path = parsedPath.path;
            const templateSource = schematics_1.apply(schematics_1.url('./files'), [
                options.spec
                    ? schematics_1.noop()
                    : schematics_1.filter(path => !path.endsWith('.spec.ts.template')),
                schematics_1.applyTemplates(Object.assign({}, schematics_core_1.stringUtils, { 'if-flat': (s) => schematics_core_1.stringUtils.group(options.flat ? '' : s, options.group ? 'effects' : '') }, options)),
                schematics_1.move(parsedPath.path),
            ]);
            return schematics_1.chain([
                schematics_1.branchAndMerge(schematics_1.chain([addImportToNgModule(options), schematics_1.mergeWith(templateSource)])),
                options && options.skipPackageJson
                    ? schematics_1.noop()
                    : addNgRxEffectsToPackageJson(),
            ])(host, context);
        };
    }
    exports.default = default_1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9tb2R1bGVzL2VmZmVjdHMvc2NoZW1hdGljcy9uZy1hZGQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQSwyREFlb0M7SUFDcEMsNERBQTBFO0lBQzFFLGlDQUFpQztJQUNqQyxtRUFXdUM7SUFHdkMsU0FBUyxtQkFBbUIsQ0FBQyxPQUEwQjtRQUNyRCxPQUFPLENBQUMsSUFBVSxFQUFFLEVBQUU7WUFDcEIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUVsQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ3BEO1lBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ2pCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxRQUFRLFVBQVUsa0JBQWtCLENBQUMsQ0FBQzthQUNyRTtZQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFMUMsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUNoQyxVQUFVLEVBQ1YsVUFBVSxFQUNWLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUN0QixJQUFJLENBQ0wsQ0FBQztZQUVGLE1BQU0sV0FBVyxHQUFHLEdBQUcsNkJBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBRXhFLE1BQU0sbUJBQW1CLEdBQUcsOEJBQVksQ0FDdEMsTUFB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Q0FBUyxFQUFFLEVBQUUsQ0FDdkIsNkJBQVcsQ0FBQyxLQUFLLENBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMvQixJQUNDLE9BQWtCLENBQ2hCLENBQUM7Z0JBQ1QsaUJBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQ3RCLENBQUMsQ0FBQztZQUVILE9BQU8sa0JBQUssQ0FBQztnQkFDWCwyQkFBYyxDQUNaLGtCQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxzQkFBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FDakU7Z0JBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxlQUFlO29CQUNoQyxDQUFDLENBQUMsaUJBQUksRUFBRTtvQkFDUixDQUFDLENBQUMsMkJBQTJCLEVBQUU7YUFDbEMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUM7SUFDSixDQUFDO0lBckNELDRCQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFJ1bGUsXG4gIFNjaGVtYXRpY0NvbnRleHQsXG4gIFNjaGVtYXRpY3NFeGNlcHRpb24sXG4gIFRyZWUsXG4gIGFwcGx5LFxuICBhcHBseVRlbXBsYXRlcyxcbiAgYnJhbmNoQW5kTWVyZ2UsXG4gIGNoYWluLFxuICBmaWx0ZXIsXG4gIG1lcmdlV2l0aCxcbiAgbW92ZSxcbiAgbm9vcCxcbiAgdGVtcGxhdGUsXG4gIHVybCxcbn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHsgTm9kZVBhY2thZ2VJbnN0YWxsVGFzayB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9zY2hlbWF0aWNzL3Rhc2tzJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtcbiAgc3RyaW5nVXRpbHMsXG4gIGluc2VydEltcG9ydCxcbiAgYnVpbGRSZWxhdGl2ZVBhdGgsXG4gIGFkZEltcG9ydFRvTW9kdWxlLFxuICBJbnNlcnRDaGFuZ2UsXG4gIGdldFByb2plY3RQYXRoLFxuICBmaW5kTW9kdWxlRnJvbU9wdGlvbnMsXG4gIGFkZFBhY2thZ2VUb1BhY2thZ2VKc29uLFxuICBwbGF0Zm9ybVZlcnNpb24sXG4gIHBhcnNlTmFtZSxcbn0gZnJvbSAnQG5ncngvZWZmZWN0cy9zY2hlbWF0aWNzLWNvcmUnO1xuaW1wb3J0IHsgU2NoZW1hIGFzIFJvb3RFZmZlY3RPcHRpb25zIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5mdW5jdGlvbiBhZGRJbXBvcnRUb05nTW9kdWxlKG9wdGlvbnM6IFJvb3RFZmZlY3RPcHRpb25zKTogUnVsZSB7XG4gIHJldHVybiAoaG9zdDogVHJlZSkgPT4ge1xuICAgIGNvbnN0IG1vZHVsZVBhdGggPSBvcHRpb25zLm1vZHVsZTtcblxuICAgIGlmICghbW9kdWxlUGF0aCkge1xuICAgICAgcmV0dXJuIGhvc3Q7XG4gICAgfVxuXG4gICAgaWYgKCFob3N0LmV4aXN0cyhtb2R1bGVQYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcGVjaWZpZWQgbW9kdWxlIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9IGhvc3QucmVhZChtb2R1bGVQYXRoKTtcbiAgICBpZiAodGV4dCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFNjaGVtYXRpY3NFeGNlcHRpb24oYEZpbGUgJHttb2R1bGVQYXRofSBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICB9XG4gICAgY29uc3Qgc291cmNlVGV4dCA9IHRleHQudG9TdHJpbmcoJ3V0Zi04Jyk7XG5cbiAgICBjb25zdCBzb3VyY2UgPSB0cy5jcmVhdGVTb3VyY2VGaWxlKFxuICAgICAgbW9kdWxlUGF0aCxcbiAgICAgIHNvdXJjZVRleHQsXG4gICAgICB0cy5TY3JpcHRUYXJnZXQuTGF0ZXN0LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBjb25zdCBlZmZlY3RzTmFtZSA9IGAke3N0cmluZ1V0aWxzLmNsYXNzaWZ5KGAke29wdGlvbnMubmFtZX1FZmZlY3RzYCl9YDtcblxuICAgIGNvbnN0IGVmZmVjdHNNb2R1bGVJbXBvcnQgPSBpbnNlcnRJbXBvcnQoXG4gICAgICBzb3VyY2UsXG4gICAgICBtb2R1bGVQYXRoLFxuICAgICAgJ0VmZmVjdHNNb2R1bGUnLFxuICAgICAgJ0BuZ3J4L2VmZmVjdHMnXG4gICAgKTtcblxuICAgIGNvbnN0IGVmZmVjdHNQYXRoID1cbiAgICAgIGAvJHtvcHRpb25zLnBhdGh9L2AgK1xuICAgICAgKG9wdGlvbnMuZmxhdCA/ICcnIDogc3RyaW5nVXRpbHMuZGFzaGVyaXplKG9wdGlvbnMubmFtZSkgKyAnLycpICtcbiAgICAgIChvcHRpb25zLmdyb3VwID8gJ2VmZmVjdHMvJyA6ICcnKSArXG4gICAgICBzdHJpbmdVdGlscy5kYXNoZXJpemUob3B0aW9ucy5uYW1lKSArXG4gICAgICAnLmVmZmVjdHMnO1xuICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IGJ1aWxkUmVsYXRpdmVQYXRoKG1vZHVsZVBhdGgsIGVmZmVjdHNQYXRoKTtcbiAgICBjb25zdCBlZmZlY3RzSW1wb3J0ID0gaW5zZXJ0SW1wb3J0KFxuICAgICAgc291cmNlLFxuICAgICAgbW9kdWxlUGF0aCxcbiAgICAgIGVmZmVjdHNOYW1lLFxuICAgICAgcmVsYXRpdmVQYXRoXG4gICAgKTtcbiAgICBjb25zdCBbZWZmZWN0c05nTW9kdWxlSW1wb3J0XSA9IGFkZEltcG9ydFRvTW9kdWxlKFxuICAgICAgc291cmNlLFxuICAgICAgbW9kdWxlUGF0aCxcbiAgICAgIGBFZmZlY3RzTW9kdWxlLmZvclJvb3QoWyR7ZWZmZWN0c05hbWV9XSlgLFxuICAgICAgcmVsYXRpdmVQYXRoXG4gICAgKTtcbiAgICBjb25zdCBjaGFuZ2VzID0gW2VmZmVjdHNNb2R1bGVJbXBvcnQsIGVmZmVjdHNJbXBvcnQsIGVmZmVjdHNOZ01vZHVsZUltcG9ydF07XG4gICAgY29uc3QgcmVjb3JkZXIgPSBob3N0LmJlZ2luVXBkYXRlKG1vZHVsZVBhdGgpO1xuICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIGNoYW5nZXMpIHtcbiAgICAgIGlmIChjaGFuZ2UgaW5zdGFuY2VvZiBJbnNlcnRDaGFuZ2UpIHtcbiAgICAgICAgcmVjb3JkZXIuaW5zZXJ0TGVmdChjaGFuZ2UucG9zLCBjaGFuZ2UudG9BZGQpO1xuICAgICAgfVxuICAgIH1cbiAgICBob3N0LmNvbW1pdFVwZGF0ZShyZWNvcmRlcik7XG5cbiAgICByZXR1cm4gaG9zdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTmdSeEVmZmVjdHNUb1BhY2thZ2VKc29uKCkge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUsIGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQpID0+IHtcbiAgICBhZGRQYWNrYWdlVG9QYWNrYWdlSnNvbihcbiAgICAgIGhvc3QsXG4gICAgICAnZGVwZW5kZW5jaWVzJyxcbiAgICAgICdAbmdyeC9lZmZlY3RzJyxcbiAgICAgIHBsYXRmb3JtVmVyc2lvblxuICAgICk7XG4gICAgY29udGV4dC5hZGRUYXNrKG5ldyBOb2RlUGFja2FnZUluc3RhbGxUYXNrKCkpO1xuICAgIHJldHVybiBob3N0O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zOiBSb290RWZmZWN0T3B0aW9ucyk6IFJ1bGUge1xuICByZXR1cm4gKGhvc3Q6IFRyZWUsIGNvbnRleHQ6IFNjaGVtYXRpY0NvbnRleHQpID0+IHtcbiAgICBvcHRpb25zLnBhdGggPSBnZXRQcm9qZWN0UGF0aChob3N0LCBvcHRpb25zKTtcblxuICAgIGlmIChvcHRpb25zLm1vZHVsZSkge1xuICAgICAgb3B0aW9ucy5tb2R1bGUgPSBmaW5kTW9kdWxlRnJvbU9wdGlvbnMoaG9zdCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkUGF0aCA9IHBhcnNlTmFtZShvcHRpb25zLnBhdGgsIG9wdGlvbnMubmFtZSk7XG4gICAgb3B0aW9ucy5uYW1lID0gcGFyc2VkUGF0aC5uYW1lO1xuICAgIG9wdGlvbnMucGF0aCA9IHBhcnNlZFBhdGgucGF0aDtcblxuICAgIGNvbnN0IHRlbXBsYXRlU291cmNlID0gYXBwbHkodXJsKCcuL2ZpbGVzJyksIFtcbiAgICAgIG9wdGlvbnMuc3BlY1xuICAgICAgICA/IG5vb3AoKVxuICAgICAgICA6IGZpbHRlcihwYXRoID0+ICFwYXRoLmVuZHNXaXRoKCcuc3BlYy50cy50ZW1wbGF0ZScpKSxcbiAgICAgIGFwcGx5VGVtcGxhdGVzKHtcbiAgICAgICAgLi4uc3RyaW5nVXRpbHMsXG4gICAgICAgICdpZi1mbGF0JzogKHM6IHN0cmluZykgPT5cbiAgICAgICAgICBzdHJpbmdVdGlscy5ncm91cChcbiAgICAgICAgICAgIG9wdGlvbnMuZmxhdCA/ICcnIDogcyxcbiAgICAgICAgICAgIG9wdGlvbnMuZ3JvdXAgPyAnZWZmZWN0cycgOiAnJ1xuICAgICAgICAgICksXG4gICAgICAgIC4uLihvcHRpb25zIGFzIG9iamVjdCksXG4gICAgICB9IGFzIGFueSksXG4gICAgICBtb3ZlKHBhcnNlZFBhdGgucGF0aCksXG4gICAgXSk7XG5cbiAgICByZXR1cm4gY2hhaW4oW1xuICAgICAgYnJhbmNoQW5kTWVyZ2UoXG4gICAgICAgIGNoYWluKFthZGRJbXBvcnRUb05nTW9kdWxlKG9wdGlvbnMpLCBtZXJnZVdpdGgodGVtcGxhdGVTb3VyY2UpXSlcbiAgICAgICksXG4gICAgICBvcHRpb25zICYmIG9wdGlvbnMuc2tpcFBhY2thZ2VKc29uXG4gICAgICAgID8gbm9vcCgpXG4gICAgICAgIDogYWRkTmdSeEVmZmVjdHNUb1BhY2thZ2VKc29uKCksXG4gICAgXSkoaG9zdCwgY29udGV4dCk7XG4gIH07XG59XG4iXX0=