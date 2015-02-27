angular.module('Examples')
.controller('MegaMenuExample', function($scope) {
    $scope.myData = [{
      "childNodes": [],
      "id": "Portal_Home",
      "name": "Home",
      "tooltip": "Home",
      "url": "http://jtennant3portal.sumtotalsystems.com/sites/default/home.aspx"
    },
    {
      "childNodes": [{
        "childNodes": [{
          "childNodes": [],
          "id": "Learner_Dashboard",
          "name": "Dashboard",
          "tooltip": "Dashboard",
          "url": "app/management/LMS_LearnerHome.aspx"
        },
          {
            "childNodes": [],
            "id": "Learner_Search",
            "name": "Search",
            "tooltip": "Search",
            "url": "app/taxonomy/learnerSearch/LearnerSearch.aspx?UserMode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuTaxonomy",
            "name": "Catalog",
            "tooltip": "Catalog",
            "url": "app/taxonomy/TAX_Main.aspx?UserMode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuViewFavorites",
            "name": "Favorites",
            "tooltip": "Favorites",
            "url": "app/taxonomy/TAX_Fav.aspx?UserMode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuTrainingSch",
            "name": "Training Schedule",
            "tooltip": "Training Schedule",
            "url": "app/management/LMS_Training.aspx?UserMode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuSelfReportedTraining",
            "name": "Self-Reported Training",
            "tooltip": "Self-Reported Training",
            "url": "app/management/LMS_SelfReportedTraining.aspx?UserMode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuEvaluations",
            "name": "Learning Activity Evaluations",
            "tooltip": "Learning Activity Evaluations",
            "url": "app/management/LMS_Evaluation.aspx?UserMode=0&Mode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuPlannedAppr",
            "name": "Learner Approvals",
            "tooltip": "Learner Approvals",
            "url": "app/management/LMS_TrainingAppr.aspx"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuNotifEmails",
            "name": "Messages",
            "tooltip": "Messages",
            "url": "app/management/LMS_ListNotifEmails.aspx?UserMode=0"
          },
          {
            "childNodes": [],
            "id": "Learner_MenuPublishKDoc",
            "name": "Knowledge Documents",
            "tooltip": "Knowledge Documents",
            "url": "app/management/content/LMS_KdocList.aspx?UserMode=0"
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Learner_MenuTrainingTranscript",
              "name": "Training Transcript",
              "tooltip": "Training Transcript",
              "url": "app/management/LMS_LearnerReports.aspx?UserMode=0&Mode=1"
            },
              {
                "childNodes": [],
                "id": "Learner_MenuInvoiceReports",
                "name": "Invoice Report",
                "tooltip": "Invoice Report",
                "url": "app/management/LMS_InvoiceReport.aspx?UserMode=0&Mode=0"
              }
            ],
            "id": "Learner_MenuLAReports",
            "name": "Learning Activity Reports",
            "tooltip": "Learning Activity Reports",
            "url": ""
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Learner_MenuSkillAnalysis",
              "name": "Skill Analysis",
              "tooltip": "Skill Analysis",
              "url": "app/management/LMS_SkillGap.aspx?UserMode=0"
            },
              {
                "childNodes": [],
                "id": "Learner_MenuCompAnalysis",
                "name": "Competency Analysis",
                "tooltip": "Competency Analysis",
                "url": "app/management/LMS_CompGap.aspx?UserMode=0"
              },
              {
                "childNodes": [],
                "id": "Learner_MenuTrainingAnalysis",
                "name": "Training Analysis",
                "tooltip": "Training Analysis",
                "url": "app/management/LMS_TrainRequired.aspx?UserMode=0"
              },
              {
                "childNodes": [],
                "id": "Learner_MenuCERequirementAnalysis",
                "name": "CE Requirement Analysis",
                "tooltip": "CE Requirement Analysis",
                "url": "app/management/LMS_CE_RequirementAnalysis.aspx?UserMode=0"
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Learner_MenuJobSkillsRequired",
                  "name": "Job Skills Required",
                  "tooltip": "Job Skills Required",
                  "url": "app/management/LMS_SkillJob.aspx?UserMode=0&Mode=0"
                },
                  {
                    "childNodes": [],
                    "id": "Learner_MenuJobTrainingRequired",
                    "name": "Job Training Required",
                    "tooltip": "Job Training Required",
                    "url": "app/management/LMS_SkillJob.aspx?UserMode=0&Mode=1"
                  }
                ],
                "id": "Learner_MenuAJobAnalysis",
                "name": "Alternate Job Analysis",
                "tooltip": "Alternate Job Analysis",
                "selected": "true",
                "url": ""
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Learner_MenuSkillsRequired",
                  "name": "Skills Required",
                  "tooltip": "Skills Required",
                  "url": "app/management/LMS_SkillOrg.aspx?UserMode=0&Mode=0"
                },
                  {
                    "childNodes": [],
                    "id": "Learner_MenuTrainingRequired",
                    "name": "Training Required",
                    "tooltip": "Training Required",
                    "url": "app/management/LMS_SkillOrg.aspx?UserMode=0&Mode=1"
                  }
                ],
                "id": "Learner_MenuAOrgAnalysis",
                "name": "Alternate Organization Analysis",
                "tooltip": "Alternate Organization Analysis",
                "url": ""
              },
              {
                "childNodes": [],
                "id": "Learner_MenuCompA",
                "name": "Competency Assessments",
                "tooltip": "Competency Assessments",
                "url": "app/management/SA_OrgnzTodo.aspx?Type=O&UserMode=0"
              },
              {
                "childNodes": [],
                "id": "Learner_MenuCompAManager",
                "name": "Competency Assessment Manager",
                "tooltip": "Competency Assessment Manager",
                "url": "app/management/SA_OrgnzMng.aspx?UserMode=0"
              }
            ],
            "id": "Learner_MenuAssess",
            "name": "Assess",
            "tooltip": "Assess",
            "url": ""
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Learner_PlanMenuTrainingPlans",
              "name": "Training Plans",
              "tooltip": "Training Plans",
              "url": "app/management/LMS_TrainingPlans.aspx?UserMode=0"
            },
              {
                "childNodes": [],
                "id": "Learner_MenuDevPlans",
                "name": "Development Plans",
                "tooltip": "Development Plans",
                "url": "app/management/LMS_DevPlan.aspx"
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Learner_MenuPlanDetails",
                  "name": "Details Report",
                  "tooltip": "Details Report",
                  "url": "app/management/LMS_DevPlan.aspx?UserMode=0&ReportTask=2"
                }],
                "id": "Learner_MenuDevPlanReports",
                "name": "Development Plan Reports",
                "tooltip": "Development Plan Reports",
                "url": ""
              }
            ],
            "id": "Learner_MenuPlan",
            "name": "Plan",
            "tooltip": "Plan",
            "url": ""
          }

        ],
        "id": "SysLearner",
        "name": "Learner",
        "tooltip": "Learner",
        "url": null
      },

        {
          "childNodes": [{
            "childNodes": [],
            "id": "Manager_Dashboard",
            "name": "Dashboard",
            "tooltip": "Dashboard",
            "url": "app/management/LMS_LearnerHome.aspx?UserMode=1"
          },
            {
              "childNodes": [],
              "id": "Manager_Search",
              "name": "Search",
              "tooltip": "Search",
              "url": "app/taxonomy/learnerSearch/LearnerSearch.aspx?UserMode=1"
            },
            {
              "childNodes": [],
              "id": "Manager_MenuCompA",
              "name": "Competency Assessments",
              "tooltip": "Competency Assessments",
              "url": "app/management/SA_OrgnzSched.aspx?strType=current&UserMode=1"
            },
            {
              "childNodes": [],
              "id": "Manager_MenuCompAManager",
              "name": "Competency Assessment Manager",
              "tooltip": "Competency Assessment Manager",
              "url": "app/management/SA_OrgnzMng.aspx?UserMode=1"
            },
            {
              "childNodes": [],
              "id": "Manager_PlanMenuTrainingPlansManager",
              "name": "Training Plans",
              "tooltip": "Training Plans",
              "url": "app/management/LMS_TrainingPlans.aspx?UserMode=1"
            },
            {
              "childNodes": [],
              "id": "Manager_MenuDevPlans",
              "name": "Development Plans",
              "tooltip": "Development Plans",
              "url": "app/management/LMS_DevPlan.aspx?UserMode=1&Mode=1"
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "Manager_MenuPlanDetails",
                "name": "Details Report",
                "tooltip": "Details Report",
                "url": "app/management/LMS_DevPlan.aspx?UserMode=1&ReportTask=3"
              },
                {
                  "childNodes": [],
                  "id": "Manager_MenuBizObj",
                  "name": "Business Objectives",
                  "tooltip": "Business Objectives",
                  "url": "app/management/LMS_DevPlan.aspx?UserMode=1&ReportTask=1"
                }
              ],
              "id": "Manager_MenuDevPlanReports",
              "name": "Development Plan Reports",
              "tooltip": "Development Plan Reports",
              "url": ""
            },
            {
              "childNodes": [],
              "id": "Manager_MenuTaxonomy",
              "name": "Catalog",
              "tooltip": "Catalog",
              "url": "app/taxonomy/TAX_Main.aspx?UserMode=1"
            },
            {
              "childNodes": [],
              "id": "Manager_MenuPendingSignatures",
              "name": "Pending Signatures",
              "tooltip": "Pending Signatures",
              "url": "app/management/CFR/ADM_ListPendingSignatures.aspx?UserMode=1&SignatureType=3"
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "Manager_MenuTranscriptSignReport",
                "name": "Electronic Signatures Report",
                "tooltip": "Electronic Signatures Report",
                "url": "app/administration/reports/ADM_CFR_SignatureReportFilter.aspx?UserMode=1&ReportType=1"
              },
                {
                  "childNodes": [],
                  "id": "Manager_MenuTranscriptLearnerReport",
                  "name": "Signature Report by Learner",
                  "tooltip": "Signature Report by Learner",
                  "url": "app/administration/reports/ADM_CFR_SignatureReportFilter.aspx?UserMode=1&ReportType=4"
                }
              ],
              "id": "Manager_MenuReports",
              "name": "Reports",
              "tooltip": "Reports",
              "url": ""
            },
            {
              "childNodes": [],
              "id": "Manager_ManageJobAssociations",
              "name": "Job Associations",
              "tooltip": "Job Associations",
              "url": "app/management/association/userjob/LMS_ListUsers.aspx?UserMode=1"
            }
          ],
          "id": "SysManager",
          "name": "Manager",
          "tooltip": "Manager",
          "url": null
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "Content Manager_MenuProjects",
            "name": "Projects",
            "tooltip": "Projects",
            "url": "app/authoring/CDS_ManageProjects.aspx"
          },
            {
              "childNodes": [],
              "id": "Content Manager_MenuCourses",
              "name": "Courses",
              "tooltip": "Courses",
              "url": "app/authoring/CDS_ManageCourseList.aspx"
            },
            {
              "childNodes": [],
              "id": "Content Manager_MenuAssets",
              "name": "Assets",
              "tooltip": "Assets",
              "url": "app/authoring/CDS_ManageAssetList.aspx"
            },
            {
              "childNodes": [],
              "id": "Content Manager_MenuTemplates",
              "name": "Notification Templates",
              "tooltip": "Notification Templates",
              "url": "app/authoring/CDS_ManageTemplateList.aspx"
            },
            {
              "childNodes": [],
              "id": "Content Manager_MenuLearningObjects",
              "name": "Learning Objects",
              "tooltip": "Learning Objects",
              "url": "app/authoring/CDS_ManageLOList.aspx"
            },

            {
              "childNodes": [],
              "id": "Content Manager_MenuAssetReports",
              "name": "Asset Reports",
              "tooltip": "Asset Reports",
              "url": "app/authoring/CDS_AssetReport.aspx"
            },
            {
              "childNodes": [],
              "id": "Content Manager_MenuScreens",
              "name": "Screen Reports",
              "tooltip": "Screen Reports",
              "url": "app/authoring/CDS_ScreenReport.aspx"
            },
            {
              "childNodes": [],
              "id": "Content Manager_MenuTemplateReports",
              "name": "Template Reports",
              "tooltip": "Template Reports",
              "url": "app/authoring/CDS_TemplateReport.aspx"
            },
            {
              "childNodes": [],
              "id": "Content Manager_MenuLOReports",
              "name": "Learning Object Reports",
              "tooltip": "Learning Object Reports",
              "url": "app/authoring/CDS_LearningObjectReport.aspx"
            }
          ],
          "id": "SysContentManager",
          "name": "Content Manager",
          "tooltip": "Content Manager",
          "url": null
        },
        {
          "childNodes": [
            {
              "childNodes": [],
              "id": "SysAnalytics",
              "name": "Analytics",
              "tooltip": "Analytics",
              "url": "app/analytics/LMS_AnalyticsHome.aspx?UserMode=12&PersistMode=1"
            },
            {
              "childNodes": [],
              "id": "SysDashBoard",
              "name": "Report Manager",
              "tooltip": "Report Manager",
              "url": "app/management/reporting/RPT_Dashboard.aspx?PersistMode=1"
            },
            {
              "childNodes": [],
              "id": "SysAuthor",
              "name": "Author",
              "tooltip": "Author",
              "url": "app/authoring/CDS_AuthorMain.aspx?PersistMode=1"
            },
            {
              "childNodes": [],
              "id": "SysContentReviewer",
              "name": "Content Reviewer",
              "tooltip": "Content Reviewer",
              "url": "app/administration/ADM_ContentReviewer.aspx?PersistMode=1"
            }],
          "id": "Learning_Other",
          "name": "Other",
          "tooltip": "Other",
          "url": ""
        }
      ],
      "id": "LM",
      "name": "Learning",
      "tooltip": "LM",
      "url": "http://10.140.251.237/sumt89"
    },
    {
      "childNodes": [
        {
          "childNodes": [{
            "childNodes": [],
            "id": "development_developmentdashboard",
            "name": "Dashboard",
            "tooltip": "",
            "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26022&sdataevntid=0&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3ddevelopmentdashboard"
          },
            {
              "childNodes": [],
              "id": "development_360feedbackdashboard",
              "name": "360 Dashboard",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26001&sdataevntid=0&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3d360feedbackdashboard"
            },
            {
              "childNodes": [],
              "id": "development_myassessments",
              "name": "My Assessments",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?tasklst&crit_taskview_modulecd=360&sdatarsrcid=1&ttlnmcd=80098&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3dmyassessments"
            },
            {
              "childNodes": [],
              "id": "development_mycareerplan",
              "name": "My Career Plan",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=scareerplannerlstdlg.open&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3dmycareerplan"
            },
            {
              "childNodes": [],
              "id": "development_mydevelopmentplan",
              "name": "My Development Plan",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?devgoallist&sdatanavid=mydevelopmentplan&sdatanavroot=1&sdatanavnm=My Development Plan&sdatatypcd=5009&sdataaction=view&devgoallist_sortcolumn=sdb_matrixgoal_goaldesctxt&devgoallist_sortorder=ASC&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3dmydevelopmentplan"
            },
            {
              "childNodes": [],
              "id": "development_developmentwizard",
              "name": "Development Wizard",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sdevelopmentwz.open&sdatatypcd=2000&develtypcd=1&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3ddevelopmentwizard"
            },
            {
              "childNodes": [],
              "id": "development_feedbackreports",
              "name": "Feedback Reports",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=s360reportlstdlg.open()&s360reportlstdlg.typcd=5020&s360reportlstdlg.searchcrit=and%201=1%20&sdatasortcolumn=gendt&sdatasortorder=DESC&rsrcid=#{rsrcid}&sdatarsrcid=#{rsrcid}&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3dfeedbackreports"
            },
            {
              "childNodes": [],
              "id": "development_assign360task",
              "name": "Assign Task",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sassign360dlg.open&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3dassign360task"
            },
            {
              "childNodes": [],
              "id": "development_uploadform",
              "name": "Upload Form",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=home/upload.htm&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3duploadform"
            },
            {
              "childNodes": [],
              "id": "development_unsolicitedfeedback",
              "name": "Unsolicited Feedback",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sunsolicitedfeedbackwz.open&sdatatypcd=3&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3dunsolicitedfeedback"
            },
            {
              "childNodes": [],
              "id": "development_developmentreports",
              "name": "Reports",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=development%26qry_reportdefinition_rprtprctypcd_eq=7&rprttype=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3ddevelopmentreports"
            },
            {
              "childNodes": [],
              "id": "development_360reports",
              "name": "360 Reports",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=360%26qry_reportdefinition_rprtprctypcd_eq=7&rprttype=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3ddevelopment%26portalitemid%3d360reports"
            }
          ],
          "id": "main_development",
          "name": "Development",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3ddevelopment"
        },
        {
          "childNodes": [],
          "id": "performance_performancedashboard",
          "name": "Dashboard",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26002&sdataevntid=0&employeepicker=portalgroupid%3dperformance%26portalitemid%3dperformancedashboard"
        },
        {
          "childNodes": [],
          "id": "performance_myassessments",
          "name": "My Assessments",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?tasklst&crit_taskview_modulecd=performance&ttlnmcd=12507&employeepicker=portalgroupid%3dperformance%26portalitemid%3dmyassessments"
        },
        {
          "childNodes": [],
          "id": "performance_mygoals",
          "name": "My Goals",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?matrixgoallist&sdatanavid=mygoals&sdatanavroot=1&sdatanavnm=My Goals&sdatatypcd=5005&sdataaction=view&matrixgoallist_sortcolumn=sdb_matrixgoal_goaldesctxt&matrixgoallist_sortorder=ASC&employeepicker=portalgroupid%3dperformance%26portalitemid%3dmygoals"
        },
        {
          "childNodes": [],
          "id": "performance_goalapproval",
          "name": "Goal Approval",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=smgapprovelst.open&sdatatypcd=5005&employeepicker=portalgroupid%3dperformance%26portalitemid%3dgoalapproval"
        },
        {
          "childNodes": [],
          "id": "performance_goalexplorer",
          "name": "Goal Explorer",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?webapicommand=processtask&sdataobjtyp=0&sdatatypcd=5100&sdatahierid=&sdatahierlevel=&sdatahiercode=&page=w&sdataevntid=0&employeepicker=portalgroupid%3dperformance%26portalitemid%3dgoalexplorer"
        },
        {
          "childNodes": [],
          "id": "performance_pushedgoals",
          "name": "Cascaded Goals",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=smgpushedlst.open&employeepicker=portalgroupid%3dperformance%26portalitemid%3dpushedgoals"
        },
        {
          "childNodes": [],
          "id": "performance_orggoals",
          "name": "Org Goals",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=smgcorplst.open&sdatatypcd=5007&employeepicker=portalgroupid%3dperformance%26portalitemid%3dorggoals"
        },
        {
          "childNodes": [],
          "id": "performance_goalperiods",
          "name": "Goal Periods",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=smgperiodlst.open&employeepicker=portalgroupid%3dperformance%26portalitemid%3dgoalperiods"
        },
        {
          "childNodes": [],
          "id": "performance_goalkpis",
          "name": "Key Performance Indicators (KPIs)",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&submitaction=submit&suiaction.value=sobjectlstdlg.open&sdatatypcd=12200&qry_goalkpiview_lngcd_eq=0&frommenu=1&employeepicker=portalgroupid%3dperformance%26portalitemid%3dgoalkpis"
        },
        {
          "childNodes": [],
          "id": "performance_rdmworksheet",
          "name": "RDM Worksheet",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?parsetemplate&template=pm/rdm/rdm_opentask_step1.htm&employeepicker=portalgroupid%3dperformance%26portalitemid%3drdmworksheet"
        },
        {
          "childNodes": [],
          "id": "performance_createassessment",
          "name": "Create Assessment",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?parsetemplate&template=pm/pm_review_selfassign.htm&employeepicker=portalgroupid%3dperformance%26portalitemid%3dcreateassessment"
        },
        {
          "childNodes": [],
          "id": "performance_uploadform",
          "name": "Upload Form",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?parsetemplate&template=home/upload.htm&employeepicker=portalgroupid%3dperformance%26portalitemid%3duploadform"
        },
        {
          "childNodes": [],
          "id": "performance_performancereports",
          "name": "Reports",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=performance%26qry_reportdefinition_rprtprctypcd_eq=7&rprttype=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3dperformance%26portalitemid%3dperformancereports"
        }
      ],
      "id": "main_performance",
      "name": "Performance",
      "tooltip": "",
      "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3dperformance"
    },
    {
      "childNodes": [{
        "childNodes": [],
        "id": "succession_successiondashboard",
        "name": "Dashboard",
        "tooltip": "",
        "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26010&sdataevntid=0&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dsuccessiondashboard"
      },
        {
          "childNodes": [],
          "id": "succession_talentexplorer",
          "name": "Talent Explorer",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?sptalentpoolext&sdataaction=run&sdataactid=myteampool&sdatatypcd=14018&sdatashowhiddenflg=1&sptalentpoolext_sortcolumn=sdb_sresource_lstnm&sptalentpoolext_sortorder=ASC&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dtalentexplorer"
        },
        {
          "childNodes": [],
          "id": "succession_positionsearch",
          "name": "Search Positions",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?sppositionlist&sdatatypcd=14049&sdataaction=opensearch&datasrc=sppositionlist&sdatanavroot=1&sdatanavid=positionsearch&sdatanavnmcd=14202&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dpositionsearch"
        },
        {
          "childNodes": [],
          "id": "succession_positionwizard",
          "name": "New Position",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?processtask&sdatanavid=auto&sdatanavroot=1&sdatanavnm=New Position&sdatatypcd=14050&sdataevntid=0&sdataaction=create&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dpositionwizard"
        },
        {
          "childNodes": [],
          "id": "succession_myassessments",
          "name": "My Assessments",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?tasklst&crit_taskview_modulecd=succession&ttlnmcd=14116&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dmyassessments"
        },
        {
          "childNodes": [],
          "id": "succession_myposition",
          "name": "My Position",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?processtask&sdataaction=viewwkspc&sdataevntid=0&sdatatypcd=14050&sdatanavroot=1&sdatanavnmcd=14201&myposition=1&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dmyposition"
        },
        {
          "childNodes": [],
          "id": "succession_successionreports",
          "name": "Reports",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=succession%26qry_reportdefinition_rprtprctypcd_eq=7&rprttype=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3dsuccession%26portalitemid%3dsuccessionreports"
        }
      ],
      "id": "main_succession",
      "name": "Succession",
      "tooltip": "",
      "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3dsuccession"
    },
    {
      "childNodes": [{
        "childNodes": [],
        "id": "compensation_compensationdashboard",
        "name": "Dashboard",
        "tooltip": "",
        "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26003&sdataevntid=0&employeepicker=portalgroupid%3dcompensation%26portalitemid%3dcompensationdashboard"
      },
        {
          "childNodes": [{
            "childNodes": [{
              "childNodes": [{
                "childNodes": [],
                "id": "MessageInbox",
                "name": "Inbox",
                "tooltip": "",
                "url": "/SelfService?node=MessageInbox"
              }],
              "id": "Otheroptions",
              "name": "Welcome",
              "tooltip": "",
              "url": null
            },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Forms",
                  "name": "Forms",
                  "tooltip": "",
                  "url": "/SelfService?node=Forms"
                },
                  {
                    "childNodes": [],
                    "id": "Handbook",
                    "name": "Handbook",
                    "tooltip": "",
                    "url": "/SelfService?node=Handbook"
                  },
                  {
                    "childNodes": [],
                    "id": "Policies",
                    "name": "Policies",
                    "tooltip": "",
                    "url": "/SelfService?node=Policies"
                  }
                ],
                "id": "Company",
                "name": "Company",
                "tooltip": "",
                "url": null
              }
            ],
            "id": "Home",
            "name": "Home",
            "tooltip": "",
            "url": null
          },
            {
              "childNodes": [{
                "childNodes": [{
                  "childNodes": [],
                  "id": "LegalAddress",
                  "name": "Legal Name and Address",
                  "tooltip": "",
                  "url": "/SelfService?node=LegalAddress"
                },
                  {
                    "childNodes": [],
                    "id": "MailingAddress",
                    "name": "Mailing Name and Address",
                    "tooltip": "",
                    "url": "/SelfService?node=MailingAddress"
                  },
                  {
                    "childNodes": [],
                    "id": "ContactInfo",
                    "name": "Phone, Fax and Email",
                    "tooltip": "",
                    "url": "/SelfService?node=ContactInfo"
                  },
                  {
                    "childNodes": [],
                    "id": "FamilyInfo",
                    "name": "Family Members",
                    "tooltip": "",
                    "url": "/SelfService?node=FamilyInfo"
                  },
                  {
                    "childNodes": [],
                    "id": "EmergencyContactInfo",
                    "name": "Emergency Contacts",
                    "tooltip": "",
                    "url": "/SelfService?node=EmergencyContactInfo"
                  },
                  {
                    "childNodes": [],
                    "id": "EmergencyDoctor",
                    "name": "Emergency Doctor",
                    "tooltip": "",
                    "url": "/SelfService?node=EmergencyDoctor"
                  },
                  {
                    "childNodes": [],
                    "id": "OtherPersonalDetails",
                    "name": "Other Personal Details",
                    "tooltip": "",
                    "url": "/SelfService?node=OtherPersonalDetails"
                  },
                  {
                    "childNodes": [],
                    "id": "LifeChange",
                    "name": "Life Event",
                    "tooltip": "",
                    "url": "/SelfService?node=LifeChange"
                  }
                ],
                "id": "PersonalDetails",
                "name": "Personal Information",
                "tooltip": "",
                "url": null
              },
                {
                  "childNodes": [{
                    "childNodes": [],
                    "id": "CurrentBenefits",
                    "name": "Current Enrollments",
                    "tooltip": "",
                    "url": "/SelfService?node=CurrentBenefits"
                  },
                    {
                      "childNodes": [],
                      "id": "FutureBenefits",
                      "name": "Next Year's Enrollments",
                      "tooltip": "",
                      "url": "/SelfService?node=FutureBenefits"
                    },
                    {
                      "childNodes": [],
                      "id": "BeneficiariesInfo",
                      "name": "Beneficiaries",
                      "tooltip": "",
                      "url": "/SelfService?node=BeneficiariesInfo"
                    },
                    {
                      "childNodes": [],
                      "id": "FlexSpendingAccount",
                      "name": "Flexible Spending Accounts",
                      "tooltip": "",
                      "url": "/SelfService?node=FlexSpendingAccount"
                    }
                  ],
                  "id": "Benefits",
                  "name": "Benefits",
                  "tooltip": "",
                  "url": null
                },
                {
                  "childNodes": [{
                    "childNodes": [],
                    "id": "OpenEnrollmentWelcome",
                    "name": "Welcome to Benefits Enrollment",
                    "tooltip": "",
                    "url": "/SelfService?node=OpenEnrollmentWelcome"
                  },
                    {
                      "childNodes": [],
                      "id": "EnrollmentChanges",
                      "name": "What's New This Year",
                      "tooltip": "",
                      "url": "/SelfService?node=EnrollmentChanges"
                    },
                    {
                      "childNodes": [],
                      "id": "EnrollmentReview",
                      "name": "About the Enrollment Process",
                      "tooltip": "",
                      "url": "/SelfService?node=EnrollmentReview"
                    },
                    {
                      "childNodes": [],
                      "id": "BenefitsEligibility",
                      "name": "Benefit Choices",
                      "tooltip": "",
                      "url": "/SelfService?node=BenefitsEligibility"
                    },
                    {
                      "childNodes": [],
                      "id": "BenefitsFactors",
                      "name": "Information About You",
                      "tooltip": "",
                      "url": "/SelfService?node=BenefitsFactors"
                    },
                    {
                      "childNodes": [],
                      "id": "BenefitsEnrollment",
                      "name": "Enroll in Benefits",
                      "tooltip": "",
                      "url": "/SelfService?node=BenefitsEnrollment"
                    }
                  ],
                  "id": "OpenEnrollment",
                  "name": "Benefits Enrollment",
                  "tooltip": "",
                  "url": null
                },
                {
                  "childNodes": [{
                    "childNodes": [],
                    "id": "CurrentPay",
                    "name": "Current Pay Statement",
                    "tooltip": "",
                    "url": "/SelfService?node=CurrentPay"
                  },
                    {
                      "childNodes": [],
                      "id": "PayHistory",
                      "name": "Pay Statement History",
                      "tooltip": "",
                      "url": "/SelfService?node=PayHistory"
                    },
                    {
                      "childNodes": [],
                      "id": "PayAdviceInformation",
                      "name": "Pay Statement Information",
                      "tooltip": "",
                      "url": "/SelfService?node=PayAdviceInformation"
                    },
                    {
                      "childNodes": [],
                      "id": "RegistrationForElectroniceDelivery",
                      "name": "Annual Statement Consent Form",
                      "tooltip": "",
                      "url": "/SelfService?node=RegistrationForElectroniceDelivery"
                    },
                    {
                      "childNodes": [],
                      "id": "ViewAnnualStatements",
                      "name": "Annual Statements",
                      "tooltip": "",
                      "url": "/SelfService?node=ViewAnnualStatements"
                    },
                    {
                      "childNodes": [],
                      "id": "DirectDeposit",
                      "name": "Direct Deposit",
                      "tooltip": "",
                      "url": "/SelfService?node=DirectDeposit"
                    },
                    {
                      "childNodes": [],
                      "id": "ReimbursementAccount",
                      "name": "Reimbursement Account",
                      "tooltip": "",
                      "url": "/SelfService?node=ReimbursementAccount"
                    }
                  ],
                  "id": "Pay",
                  "name": "Pay Information",
                  "tooltip": "",
                  "url": null
                },
                {
                  "childNodes": [{
                    "childNodes": [],
                    "id": "TimeAwayRequests",
                    "name": "Time Off Requests",
                    "tooltip": "",
                    "url": "/SelfService?node=TimeAwayRequests"
                  },
                    {
                      "childNodes": [],
                      "id": "TimeBalances",
                      "name": "Time Off Balances",
                      "tooltip": "",
                      "url": "/SelfService?node=TimeBalances"
                    }
                  ],
                  "id": "Time",
                  "name": "Time Off",
                  "tooltip": "",
                  "url": null
                }
              ],
              "id": "Ess",
              "name": "Personal",
              "tooltip": "",
              "url": null
            }
          ],
          "id": "PayrollSS",
          "name": "Payroll Self Service",
          "tooltip": "",
          "url": "http://kagarwal-02:8080/SS61/"
        },
        {
          "childNodes": [],
          "id": "compensation_compensationworksheet",
          "name": "My Worksheet",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?parsetemplate&template=cm/cm_excelworksheetnew_step1.htm&employeepicker=portalgroupid%3dcompensation%26portalitemid%3dcompensationworksheet"
        },
        {
          "childNodes": [],
          "id": "compensation_budgetworksheet",
          "name": "My Budget Worksheet",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?parsetemplate&template=cm/budget/cm_budgetworksheet_step1.htm&employeepicker=portalgroupid%3dcompensation%26portalitemid%3dbudgetworksheet"
        },
        {
          "childNodes": [],
          "id": "compensation_compensationstatement",
          "name": "My Statement",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?cmstatement&sdatatypcd=7038&sdataaction=open&employeepicker=portalgroupid%3dcompensation%26portalitemid%3dcompensationstatement"
        },
        {
          "childNodes": [],
          "id": "compensation_incentivegoals",
          "name": "Incentive Goals",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sobjectlstdlg.open&sobjectlstdlg.typcd=15100&individual=1&sdatarecipid=#{rsrcid}&employeepicker=portalgroupid%3dcompensation%26portalitemid%3dincentivegoals"
        },
        {
          "childNodes": [],
          "id": "compensation_compensationreports",
          "name": "Reports",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=compensation%26qry_reportdefinition_rprtprctypcd_eq=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3dcompensation%26portalitemid%3dcompensationreports"
        }
      ],
      "id": "main_compensation",
      "name": "Compensation",
      "tooltip": "",
      "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3dcompensation"
    },
    {
      "childNodes": [{
        "childNodes": [],
        "id": "hiring_hiringdashboard",
        "name": "Dashboard",
        "tooltip": "",
        "url": "scripts/lightyearisapi.dll?processtask&sdatanavroot=1&sdatatypcd=26025&sdataevntid=0&employeepicker=portalgroupid%3dhiring%26portalitemid%3dhiringdashboard"
      },
        {
          "childNodes": [],
          "id": "hiring_myresume",
          "name": "My Resume",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?processtask&sdataaction=viewresume&sdataevntid=0&sdatatypcd=47000&sdatarsrcid=1&employeepicker=portalgroupid%3dhiring%26portalitemid%3dmyresume"
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "hiring.requisitions_myrequisition",
            "name": "My Requisitions",
            "tooltip": "",
            "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=40013&sdataevntid=0&sdatasearchmode=std&hmrequisitionsearch_sortcolumn=sdb_hmrequisitionintview_reqttlnm&hmrequisitionsearch_sortorder=ASC&sdataaction=openmyreq&employeepicker=portalgroupid%3dhiring%252erequisitions%26portalitemid%3dmyrequisition"
          },
            {
              "childNodes": [],
              "id": "hiring.requisitions_newrequisition",
              "name": "New Requisition",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=hm/requisition/hm_requisition_new_step1.htm&employeepicker=portalgroupid%3dhiring%252erequisitions%26portalitemid%3dnewrequisition"
            },
            {
              "childNodes": [],
              "id": "hiring.requisitions_searchrequisition",
              "name": "Search Requisitions",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=hm/requisition/hm_requisitionlst_internal_search.htm&sdatasvyid=svy_hm_requisitionsearch&employeepicker=portalgroupid%3dhiring%252erequisitions%26portalitemid%3dsearchrequisition"
            }
          ],
          "id": "hiring_requisitions",
          "name": "Requisitions",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dhiring%26portalitemid%3drequisitions"
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "hiring.candidates_mycandidate",
            "name": "My Candidates",
            "tooltip": "",
            "url": "scripts/lightyearisapi.dll?hmapplicationsearch&sdatatypcd=40077&hmapplicationsearch_pagenum=1&sdataaction=myapplication&employeepicker=portalgroupid%3dhiring%252ecandidates%26portalitemid%3dmycandidate"
          },
            {
              "childNodes": [],
              "id": "hiring.candidates_addcandidate",
              "name": "New Candidate",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?hmapplyjob&sdatatypcd=40062&sdataevntid=0&sdataaction=start&sdatareturnurl=/scripts/lightyearisapi.dll?processtask%26sdatatypcd=26025%26sdataevntid=0&sdatareturnmsgcd=26025&employeepicker=portalgroupid%3dhiring%252ecandidates%26portalitemid%3daddcandidate"
            },
            {
              "childNodes": [],
              "id": "hiring.candidates_candidateexplorer",
              "name": "Candidate Explorer",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=hm/candidate/hm_candidatelstexplorer.htm&employeepicker=portalgroupid%3dhiring%252ecandidates%26portalitemid%3dcandidateexplorer"
            }
          ],
          "id": "hiring_myapplications",
          "name": "Candidates",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dhiring%26portalitemid%3dmyapplications"
        },
        {
          "childNodes": [],
          "id": "hiring_myinterviews",
          "name": "Interviews",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?hmeventsearch&sdatatypcd=40078&sdataaction=searchinterviews&hmeventsearch_pagenum=1&hmeventsearch_sortcolumn=sdb_hminterviewsearchview_interviewdt&hmeventsearch_sortorder=DESC&qry_hminterviewsearchview_lngcd_eq=0&employeepicker=portalgroupid%3dhiring%26portalitemid%3dmyinterviews"
        },
        {
          "childNodes": [],
          "id": "hiring_jobsearch",
          "name": "Job Search",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=41004&sdataevntid=0&sdatasearchmode=adv&employeepicker=portalgroupid%3dhiring%26portalitemid%3djobsearch"
        },
        {
          "childNodes": [],
          "id": "hiring_offers",
          "name": "Offers",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?hmeventsearch&sdatatypcd=40053&sdataaction=searchoffers&hmeventsearch_pagenum=1&hmeventsearch_sortcolumn=sdb_hmoffersearchview_crtdt&hmeventsearch_sortorder=desc&qry_hmoffersearchview_lngcd_eq=0&employeepicker=portalgroupid%3dhiring%26portalitemid%3doffers"
        },
        {
          "childNodes": [],
          "id": "hiring_hiringreports",
          "name": "Reports",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=hiring%26qry_reportdefinition_rprtprctypcd_eq=7&rprttype=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3dhiring%26portalitemid%3dhiringreports"
        }
      ],
      "id": "main_hiring",
      "name": "Hiring",
      "tooltip": "",
      "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3dhiring"
    },
    {
      "childNodes": [{
        "childNodes": [{
          "childNodes": [],
          "id": "timeattendance.what_my_reminders",
          "name": "My Reminders",
          "tooltip": "My Reminders",
          "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_my_reminders&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
        },
          {
            "childNodes": [],
            "id": "timeattendance.what_payroll_summary",
            "name": "View Payroll Summary",
            "tooltip": "View Payroll Summary",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_payroll_summary&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_message_inbox",
            "name": "View Messages",
            "tooltip": "View Messages",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_message_inbox&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_payroll_summary_hours",
            "name": "View Employee Total Hours (2)",
            "tooltip": "View Employee Total Hours (2)",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_payroll_summary_hours&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_load_clock_data",
            "name": "View Clock Data...",
            "tooltip": "View Clock Data",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_load_clock_data&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_send_internal_msg",
            "name": "Send Internal Message",
            "tooltip": "Send Internal Message",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_send_internal_msg&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_mass_updates",
            "name": "Process Mass Updates",
            "tooltip": "Process Mass Updates",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_mass_updates&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_dailyedits_SPDuration",
            "name": "Labor Distribution",
            "tooltip": "Labor Distribution",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_dailyedits_SPDuration&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_bubblesheet",
            "name": "Enter Time in Time Pairs",
            "tooltip": "Enter Time in Time Pairs",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_bubblesheet&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_scratchpad_h_d",
            "name": "Enter Time in Duration",
            "tooltip": "Enter Time in Duration",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_scratchpad_h_d&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_dailyedits",
            "name": "Enter Time in Detail",
            "tooltip": "Enter Time in Detail",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_dailyedits&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.what_web_clock",
            "name": "Clock via Web Clock",
            "tooltip": "Clock via Web Clock",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_web_clock&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.timeindetail",
            "name": "Time In Detail",
            "tooltip": "Time in Detail",
            "url": "/wfm/time/?targetPage=detail&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.payrollsummary",
            "name": "Payroll Summary",
            "tooltip": "Payroll Summary",
            "url": "/wfm/time/?targetPage=summary&TenantKey=47"
          },
          {
            "childNodes": [],
            "id": "timeattendance.timesheet",
            "name": "Time Sheet",
            "tooltip": "Time Sheet",
            "url": "/wfm/time/?targetPage=timeSheet&TenantKey=47"
          }
        ],
        "id": "timeattendance",
        "name": "Time and Attendance",
        "tooltip": "Time and Attendance",
        "url": "/wfm/time/?TenantKey=47"
      },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "scheduling.what_forecast_overtime",
            "name": "Forecast Overtime",
            "tooltip": "Forecast Overtime",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_forecast_overtime&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
            {
              "childNodes": [],
              "id": "scheduling.what_schedule_shift",
              "name": "Schedule Shift Changes",
              "tooltip": "Schedule Shift Changes",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_schedule_shift&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.what_schedule_roster_change",
              "name": "Schedule Roster Changes",
              "tooltip": "Schedule Roster Changes",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_schedule_roster_change&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.what_schedule_ccp_changes",
              "name": "Schedule CCP Changes",
              "tooltip": "Schedule CCP Changes",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_schedule_ccp_changes&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.what_roster_config",
              "name": "Individual Roster",
              "tooltip": "Individual Roster",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_roster_config&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.what_remove_time_schedule_changes",
              "name": "Undo Schedule Changes",
              "tooltip": "Undo Schedule Changes",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_remove_time_schedule_changes&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.what_remove_schedule_changes",
              "name": "Undo Mass Changes",
              "tooltip": "Undo Mass Changes",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_remove_schedule_changes&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.what_remove_ccp_changes",
              "name": "Undo CCP Changes",
              "tooltip": "Undo CCP Changes",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_remove_ccp_changes&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.scheduleoverrides",
              "name": "Schedule Overrides",
              "tooltip": "Schedule Overrides",
              "url": "/wfm/schedule/?targetPage=massUpdates&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.employeeskills",
              "name": "Employee Skills",
              "tooltip": "Employee Skills",
              "url": "/wfm/schedule/?targetPage=employeeSkills&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.availabilitycounts",
              "name": "Availability Counts",
              "tooltip": "Availability Counts",
              "url": "/wfm/schedule/?targetPage=employeeAvailabilityCounts&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.employeeavailability",
              "name": "Employee Availability",
              "tooltip": "Employee Availability",
              "url": "/wfm/schedule/?targetPage=employeeAvailability&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.weeklyavailability",
              "name": "Weekly Availability",
              "tooltip": "Weekly Availability",
              "url": "/wfm/schedule/?targetPage=weeklyAvailability&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.dailyschedule",
              "name": "Daily Schedule",
              "tooltip": "Daily Schedule",
              "url": "/wfm/schedule/?targetPage=dailySchedule&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.weeklyschedule",
              "name": "Weekly Schedule",
              "tooltip": "Weekly Schedule",
              "url": "/wfm/schedule/?targetPage=weeklySchedule&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "scheduling.operationsplanner",
              "name": "Operations Planner",
              "tooltip": "Operations Planner",
              "url": "/wfm/schedule/?targetPage=operationsPlanner&TenantKey=47"
            }
          ],
          "id": "scheduling",
          "name": "Scheduling",
          "tooltip": "Scheduling",
          "url": "/wfm/schedule/?TenantKey=47"
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "absence.what_absence_request",
            "name": "Request Absence (D)",
            "tooltip": "Absence Request (D)",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_absence_request&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
          },
            {
              "childNodes": [],
              "id": "absence.outside_accrual_history_report",
              "name": "Accrual History Report",
              "tooltip": "Accrual History Report",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_accrual_history_report&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_view_accruals",
              "name": "View Accruals",
              "tooltip": "View Accruals",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_view_accruals&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_time_absence_request",
              "name": "Request Absence (T)",
              "tooltip": "Request Absence (T)",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_time_absence_request&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_schedule_time_absence",
              "name": "Schedule Absence (T)",
              "tooltip": "Schedule Absence (T)",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_schedule_time_absence&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_schedule_duration_absence",
              "name": "Schedule Absence (D)",
              "tooltip": "Schedule Absence (D)",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_schedule_duration_absence&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_report_year",
              "name": "Absence Report",
              "tooltip": "Absence Report",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_year&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_report_accruals",
              "name": "Accruals Report",
              "tooltip": "Accruals Report",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_accruals&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.outside_approval_queues",
              "name": "Workflow Approvals",
              "tooltip": "Workflow Approvals",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_approval_queues&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.what_time_absence_mass_update",
              "name": "Time Absence MassUpdates",
              "tooltip": "Time Absence MassUpdates",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_time_absence_mass_update&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.outside_approval_summary",
              "name": "Approval Summary",
              "tooltip": "Approval Summary",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_approval_summary&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.accrualhistory",
              "name": "Accrual History",
              "tooltip": "Accrual History",
              "url": "/wfm/absence/?targetPage=accrualHistory&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.viewaccruals",
              "name": "View Accruals",
              "tooltip": "View Accruals",
              "url": "/wfm/absence/?targetPage=viewAccruals&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "absence.absencecalendar",
              "name": "Absence Calendar",
              "tooltip": "Absence Calendar",
              "url": "/wfm/absence/?targetPage=absenceCalendar&TenantKey=47"
            }
          ],
          "id": "absence",
          "name": "Absence",
          "tooltip": "Absence",
          "url": "/wfm/absence/?TenantKey=47"
        },
        {
          "childNodes": [{
            "childNodes": [{
              "childNodes": [],
              "id": "analytics.pdf.outside_adjustments_report",
              "name": "Adjustments Report",
              "tooltip": "Adjustments Report",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_adjustments_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_employee_daily_setup_report",
                "name": "Emp Daily Setup Report",
                "tooltip": "Emp Daily Setup Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_employee_daily_setup_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_employee_earnings_detail_report",
                "name": "Employee Earnings Detail Report",
                "tooltip": "Employee Earnings Detail Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_employee_earnings_detail_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_leave_balance_report",
                "name": "Leave Balance Report",
                "tooltip": "Leave Balance Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_leave_balance_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_payroll_report",
                "name": "Payroll Report",
                "tooltip": "Payroll Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_payroll_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_reg_vs_ot_report",
                "name": "REG vs. OT Report",
                "tooltip": "REG vs. OT Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_reg_vs_ot_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_schedule_report",
                "name": "Schedule Report",
                "tooltip": "Schedule Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_schedule_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
              {
                "childNodes": [],
                "id": "analytics.pdf.outside_scheduled_vs_worked_report",
                "name": "Schedule Vs. Worked Report",
                "tooltip": "Schedule Vs. Worked Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_scheduled_vs_worked_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              }
            ],
            "id": "analytics.pdf",
            "name": "PDF",
            "tooltip": "PDF",
            "url": null
          },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "analytics.html.what_bubblesheet_report",
                "name": "Time Pair Report",
                "tooltip": "Time Pair Report",
                "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_bubblesheet_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
              },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_report_time",
                  "name": "Time Worked Report",
                  "tooltip": "Time Worked Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_time&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_report_calendar",
                  "name": "Calendar Worked Report",
                  "tooltip": "Calendar Worked Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_calendar&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_scratchpad_h_tp",
                  "name": "Schedule Hours Report",
                  "tooltip": "Scheduled Hours Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_scratchpad_h_tp&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_scratchpad_v_d",
                  "name": "Hours Type Report",
                  "tooltip": "Hours Type Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_scratchpad_v_d&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_scratchpad_v_tp",
                  "name": "Vertical Time Pair Report",
                  "tooltip": "Vertical Time Pair Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_scratchpad_v_tp&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_staff_availability",
                  "name": "Staff Availability",
                  "tooltip": "Staff Availability",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_staff_availability&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_report_project",
                  "name": "Aggregate Totals Report",
                  "tooltip": "Aggregate Totals Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_project&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_ccp_scheduler",
                  "name": "Calendar with CCP Report",
                  "tooltip": "Calendar with CCP Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_ccp_scheduler&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_current_attendance",
                  "name": "Current Attendance Report",
                  "tooltip": "Current Attendance Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_current_attendance&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_report_monthly",
                  "name": "Daily Attendance Report",
                  "tooltip": "Daily Attendance Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_monthly&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_report_daily_detail",
                  "name": "Daily Detail Report",
                  "tooltip": "Daily Detail Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_report_daily_detail&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_scratchpad_h_d",
                  "name": "Calendar with Shift Report",
                  "tooltip": "Calendar with Shift Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_scratchpad_h_d&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.html.what_public_holiday_process_report",
                  "name": "Public Holiday Process Reports",
                  "tooltip": "Public Holiday Process Reports",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_public_holiday_process_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                }
              ],
              "id": "analytics.html",
              "name": "HTML",
              "tooltip": "HTML",
              "url": null
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "analytics.advanced.monthlyhouranalysis",
                "name": "Monthly Hour Analysis",
                "tooltip": "Monthly Hour Analysis",
                "url": "/wfm/analytics/?targetPage=monthlyHourAnalysis&TenantKey=47"
              },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.overtimeallocation",
                  "name": "Overtime Allocation",
                  "tooltip": "Overtime Allocation",
                  "url": "/wfm/analytics/?targetPage=overtimeAllocation&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_AbsenceAnalysis_report",
                  "name": "Advanced Absence Analysis Dashboard",
                  "tooltip": "Advanced Approaching Weekly Overtime Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_AbsenceAnalysis_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_AccrualHistory_report",
                  "name": "Advanced Accrual History Report",
                  "tooltip": "Advanced Accrual History Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_AccrualHistory_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_AccrualLiability_report",
                  "name": "Advanced Accrual Liability Report",
                  "tooltip": "Advanced Accrual Liability Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_AccrualLiability_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_AbsenceAnalysis_report",
                  "name": "Advanced Absence Analysis Dashboard",
                  "tooltip": "Advanced Approaching Weekly Overtime Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_AbsenceAnalysis_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_ClockData_report",
                  "name": "Advanced Clock Data Report",
                  "tooltip": "Advanced Clock Data Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_ClockData_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_Dashboard_report",
                  "name": "Hours Distribution Dashboard",
                  "tooltip": "Hours Distribution Dashboard",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_Dashboard_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_EmployeeBadge_report",
                  "name": "Advanced Employee Badge Number Report",
                  "tooltip": "Advanced Employee Badge Number Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_EmployeeBadge_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_GHPPpayrollHours_report",
                  "name": "Advanced GHP Payroll Hours Report",
                  "tooltip": "Advanced GHP Payroll Hours Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_GHPPpayrollHours_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_MissedMeals_report",
                  "name": "Advanced Missed Meals Report",
                  "tooltip": "Advanced Missed Meals Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_MissedMeals_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_MissingTime_report",
                  "name": "Advanced Missing Time Report",
                  "tooltip": "Advanced Missing Time Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_MissingTime_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_NonWorkedDays_report",
                  "name": "Advanced Non-Worked Days Report",
                  "tooltip": "Advanced Non-Worked Days Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_NonWorkedDays_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_PayPolicyInfo_report",
                  "name": "Advanced Pay Policy Info Report",
                  "tooltip": "Advanced Pay Policy Info Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_PayPolicyInfo_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_PayrollHours_report",
                  "name": "Advanced Payroll Hours Report",
                  "tooltip": "Advanced Payroll Hours Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_PayrollHours_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_ProjectHours_report",
                  "name": "Advanced Project (WO) Hours Report",
                  "tooltip": "Advanced Project (WO) Hours Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_ProjectHours_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                },
                {
                  "childNodes": [],
                  "id": "analytics.advanced.outside_jasper_server_ProjectHoursAndPay_report",
                  "name": "Advanced Project (WO) Hours and Pay Report",
                  "tooltip": "Advanced Project (WO) Hours and Pay Report",
                  "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_jasper_server_ProjectHoursAndPay_report&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
                }
              ],
              "id": "analytics.advanced",
              "name": "Advanced",
              "tooltip": "Advanced",
              "url": null
            }
          ],
          "id": "analytics",
          "name": "Analytics",
          "tooltip": "Analytics",
          "url": "/wfm/analytics/?TenantKey=47"
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "payrollallocation.lyhourlyreadings",
            "name": "LY Hourly Readings",
            "tooltip": "LY Hourly Readings",
            "url": "/wfm/payrollAlloc/?targetPage=lyHourlyReadings&TenantKey=47"
          },
            {
              "childNodes": [],
              "id": "payrollallocation.spahopportunitycalculator",
              "name": "SPAH Opportunity Calculator",
              "tooltip": "SPAH Opportunity Calculator",
              "url": "/wfm/payrollAlloc/?targetPage=spahOpportunityCalc&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "payrollallocation.personnelplan",
              "name": "Personnel Plan",
              "tooltip": "Personnel Plan",
              "url": "/wfm/payrollAlloc/?targetPage=personnelPlan&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "payrollallocation.dailyvolumeplanner",
              "name": "Daily Volume Planner",
              "tooltip": "Daily Volume Planner",
              "url": "/wfm/payrollAlloc/?targetPage=dailyVolumePlanner&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "payrollallocation.supplementalhours",
              "name": "Supplemental Hours",
              "tooltip": "Supplemental Hours",
              "url": "/wfm/payrollAlloc/?targetPage=supplementalHours&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "payrollallocation.payrollallocationworksheet",
              "name": "Daily Operations Planner",
              "tooltip": "Payroll Allocation Worksheet",
              "url": "/wfm/payrollAlloc/?targetPage=payrollAllocationWorksheet&TenantKey=47"
            }
          ],
          "id": "payrollallocation",
          "name": "Payroll Allocation",
          "tooltip": "Payroll Allocation",
          "url": "/wfm/payrollAlloc/?TenantKey=47"
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "batch.what_run_payroll",
            "name": "Run Payroll",
            "tooltip": "Run Payroll",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_run_payroll&when=today&displayType=dashboard&command=get&showActionFrame=true&showWho=true&showWhat=false&showWhenFrom=true&showWhenTo=true&TenantKey=47"
          }],
          "id": "batch",
          "name": "Batch Process",
          "tooltip": "Batch Process",
          "url": null
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "misc.what_event_summary",
            "name": "Event Summary",
            "tooltip": "Event Summary",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_event_summary&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
          },
            {
              "childNodes": [],
              "id": "misc.what_event_new_detail",
              "name": "New Event",
              "tooltip": "New Event",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_event_new_detail&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.what_event_hq_close",
              "name": "HQ Close Process",
              "tooltip": "HQ Close Process",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_event_hq_close&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.what_event_district_close",
              "name": "District / Labor Week Close",
              "tooltip": "District / Labor Week Close",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_event_district_close&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.what_event_cda_exceptions",
              "name": "CDA Exceptions",
              "tooltip": "CDA Exceptions",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_event_cda_exceptions&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_clock_data_utility",
              "name": "Clock Data Utility",
              "tooltip": "Clock Data Utility",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_clock_data_utility&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_clock_data_importer",
              "name": "Clock Data Importer",
              "tooltip": "Clock Data Importer",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_clock_data_importer&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_accrual_rate_schedule_group",
              "name": "Accrual Rate Schedule Group",
              "tooltip": "Accrual Rate Schedule Group",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_accrual_rate_schedule_group&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_accrual_rate_schedule",
              "name": "Accrual Rate Schedule",
              "tooltip": "Accrual Rate Schedule",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_accrual_rate_schedule&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_accrual_policy_group",
              "name": "Accrual Policy Group",
              "tooltip": "Accrual Policy Group",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_accrual_policy_group&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_accrual_policy",
              "name": "Accrual Policy",
              "tooltip": "Accrual Policy",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_accrual_policy&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "misc.outside_casemgr",
              "name": "Case Manager",
              "tooltip": "Case Manager",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_casemgr&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            }
          ],
          "id": "misc",
          "name": "Miscellaneous",
          "tooltip": "Miscellaneous",
          "url": null
        }
      ],
      "id": "Workforce",
      "name": "Workforce",
      "tooltip": "",
      "url": "http://csdevwks1:7001/"
    },
    {
      "childNodes": [{
        "childNodes": [{
          "childNodes": [],
          "id": "SUBMITTER_INBOX",
          "name": "Review Inbox/Documents to Complete",
          "tooltip": "Submitter - Review Inbox/Documents to Complete",
          "url": "/expense/inbox.do"
        },
          {
            "childNodes": [],
            "id": "SUBMITTER_CreateExpenseReport",
            "name": "Create Expense Report",
            "tooltip": "Submitter - Create Expense Report",
            "url": "/expense/expenseReport.do?method=createExpenseReport&f=header&push=inbox"
          },
          {
            "childNodes": [],
            "id": "SUBMITTER_ViewTransactionsToInclude",
            "name": "View Transactions to Include",
            "tooltip": "Submitter - View Transactions to Include",
            "url": "/expense/chargeCard.do?method=view&push=inbox"
          },
          {
            "childNodes": [],
            "id": "SUBMITTER_CreatePreAuthorizationRequest",
            "name": "Create a Pre-Authorization Request",
            "tooltip": "Submitter - Create a Pre-Authorization Request",
            "url": "/expense/expenseReport.do?method=createPreAuthorization&f=header&push=inbox"
          },
          {
            "childNodes": [],
            "id": "SUBMITTER_ReviewHistory",
            "name": "Review History",
            "tooltip": "Submitter - Review History",
            "url": "/expense/viewHistory.do?method=viewHistory"
          },
          {
            "childNodes": [],
            "id": "SUBMITTER_EditUserPreferences",
            "name": "Edit User Preferences",
            "tooltip": "Submitter - Edit User Preferences",
            "url": "/expense/manageUserProfile.do?method=init&ctx=ema"
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "SUBMITTER_QuickLinks_QuickLink1",
              "name": "Corporate Policy",
              "tooltip": "Quick link",
              "url": "http://www.sumtotalsystems.com?Portal=1"
            },
              {
                "childNodes": [],
                "id": "SUBMITTER_QuickLinks_QuickLink6",
                "name": "Quick Query",
                "tooltip": "Quick Link 6",
                "url": "http://xcel-was7.sumtotalsystems.com:7001/expense/quickquerylink.jsp?Portal=1"
              }
            ],
            "id": "SUBMITTER_QuickLinks",
            "name": "Quick Links",
            "tooltip": "Submitter - Quick Links",
            "url": null
          }
        ],
        "id": "SUBMITTER",
        "name": "Submitter",
        "tooltip": "Submitter",
        "url": "/expense/inbox.do"
      },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "Approver_ViewDocumentsToApprove",
            "name": "View Documents to Approve",
            "tooltip": "Approver - View Documents to Approve",
            "url": "/expense/expenseReportApproval.do?method=init&t1=quickApproval"
          }],
          "id": "APPROVER",
          "name": "Approver",
          "tooltip": "Approver",
          "url": "/expense/expenseReportApproval.do?method=init&t1=quickApproval"
        },
        {
          "childNodes": [],
          "id": "CORPADMIN",
          "name": "Admin",
          "tooltip": "Corporate Administrator",
          "url": "/admin/?popup=true&Portal=1"
        },
        {
          "childNodes": [],
          "id": "AUDITOR",
          "name": "Auditor",
          "tooltip": "Auditor",
          "url": "/backoffice/backoffice.do?method=changeModule&module=1&popup=true&Portal=1"
        },
        {
          "childNodes": [],
          "id": "RECEIPTMANAGER",
          "name": "Receipt Manager",
          "tooltip": "Receipt Manager",
          "url": "/backoffice/backoffice.do?method=changeModule&module=2&popup=true&Portal=1"
        },
        {
          "childNodes": [],
          "id": "PettyCashOfficer",
          "name": "Petty Cash",
          "tooltip": "Petty Cash Officer",
          "url": "/backoffice/backoffice.do?method=changeModule&module=3&popup=true&Portal=1"
        }
      ],
      "id": "Expense",
      "name": "Expense",
      "tooltip": "",
      "url": "http://www.msn.com"
    },
    {
      "childNodes": [{
        "childNodes": [],
        "id": "hrms_hrmsdashboard",
        "name": "Dashboard",
        "tooltip": "",
        "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26015&sdataevntid=0&employeepicker=portalgroupid%3dhrms%26portalitemid%3dhrmsdashboard"
      },
        {
          "childNodes": [],
          "id": "hrms_empprofile",
          "name": "Employee Profile",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?profile&sdatarsrcid=#{rsrcid}&employeepicker=portalgroupid%3dhrms%26portalitemid%3dempprofile"
        },
        {
          "childNodes": [],
          "id": "hrms_teamapprovals",
          "name": "Team Approvals",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=26017&sdataevntid=0&sdatadisabletools=1&employeepicker=portalgroupid%3dhrms%26portalitemid%3dteamapprovals"
        },
        {
          "childNodes": [{
            "childNodes": [{
              "childNodes": [],
              "id": "hrms.checklists.mgr_leavewizard",
              "name": "Long Term Leave Wizard",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=29004&sdataevntid=0&sdatarsrcid=#{rsrcid}&sdatapage=f&employeepicker=portalgroupid%3dhrms%252echecklists%252emgr%26portalitemid%3dleavewizard"
            },
              {
                "childNodes": [],
                "id": "hrms.checklists.mgr_returnleavewizard",
                "name": "Return From Leave Wizard",
                "tooltip": "",
                "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=29005&sdataevntid=0&sdatarsrcid=#{rsrcid}&sdatapage=f&employeepicker=portalgroupid%3dhrms%252echecklists%252emgr%26portalitemid%3dreturnleavewizard"
              },
              {
                "childNodes": [],
                "id": "hrms.checklists.mgr_positionwizard",
                "name": "Position Change Wizard",
                "tooltip": "",
                "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=29003&sdataevntid=0&sdatarsrcid=#{rsrcid}&sdatapage=f&employeepicker=portalgroupid%3dhrms%252echecklists%252emgr%26portalitemid%3dpositionwizard"
              }
            ],
            "id": "hrms.checklistgroups_hrmschecklistsmgr",
            "name": "Manager Wizards",
            "tooltip": "",
            "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dhrms%252echecklistgroups%26portalitemid%3dhrmschecklistsmgr"
          },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "hrms.checklists.admin_newuserwizard",
                "name": "Add New User Wizard",
                "tooltip": "",
                "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=shrmscreateresourcewz.open&sdatatypcd=23202&employeepicker=portalgroupid%3dhrms%252echecklists%252eadmin%26portalitemid%3dnewuserwizard"
              },
                {
                  "childNodes": [],
                  "id": "hrms.checklists.admin_newhirewizard2",
                  "name": "New Hire Wizard",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=29000&sdataevntid=0&sdatarsrcid=#{rsrcid}&sdatapage=f&employeepicker=portalgroupid%3dhrms%252echecklists%252eadmin%26portalitemid%3dnewhirewizard2"
                },
                {
                  "childNodes": [],
                  "id": "hrms.checklists.admin_rehirewizard",
                  "name": "Re-Hire Wizard",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=29001&sdataevntid=0&sdatarsrcid=#{rsrcid}&sdatapage=f&employeepicker=portalgroupid%3dhrms%252echecklists%252eadmin%26portalitemid%3drehirewizard"
                },
                {
                  "childNodes": [],
                  "id": "hrms.checklists.admin_terminationwizard",
                  "name": "Employment Termination Wizard",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?processtask&sdatatypcd=29006&sdataevntid=0&sdatarsrcid=#{rsrcid}&sdatapage=f&employeepicker=portalgroupid%3dhrms%252echecklists%252eadmin%26portalitemid%3dterminationwizard"
                }
              ],
              "id": "hrms.checklistgroups_hrmschecklistsadmin",
              "name": "HR/Admin Wizards",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dhrms%252echecklistgroups%26portalitemid%3dhrmschecklistsadmin"
            }
          ],
          "id": "hrms_hrmswizards",
          "name": "Wizards",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dhrms%26portalitemid%3dhrmswizards"
        },
        {
          "childNodes": [],
          "id": "hrms_hrmsreports",
          "name": "Reports",
          "tooltip": "",
          "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportlst.open&sreportlst.criterion=rprtmodtype=hrms%26qry_reportdefinition_rprtprctypcd_eq=7&rprttype=7&tablvl1id=tabFilter3&employeepicker=portalgroupid%3dhrms%26portalitemid%3dhrmsreports"
        }
      ],
      "id": "main_hrms",
      "name": "HR Management",
      "tooltip": "",
      "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3dhrms"
    },
    {
      "childNodes": [{
        "childNodes": [],
        "id": "Learner_MenuCoCenter",
        "name": "Collaboration Centers",
        "tooltip": "Collaboration Centers",
        "url": "app/management/ACC_Collaboration.aspx?UserMode=0"
      }],
      "id": "Learner_MenuCollaborate",
      "name": "Collaborate",
      "tooltip": "Collaborate",
      "url": ""
    },
    {
      "childNodes": [{
        "childNodes": [{
          "childNodes": [],
          "id": "Administrator_Dashboard",
          "name": "Dashboard",
          "tooltip": "Dashboard",
          "url": "app/administration/ADM_AdminHome.aspx"
        },
          {
            "childNodes": [],
            "id": "Administrator_Search",
            "name": "Search",
            "tooltip": "Search",
            "url": "app/Administration/ADM_AdvancedSearch.aspx?UserMode=2"
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Administrator_MenuUsers",
              "name": "Users",
              "tooltip": "Users",
              "url": "app/administration/user/employee/ADM_ListUsers.aspx"
            },
              {
                "childNodes": [],
                "id": "Administrator_MenuDomains",
                "name": "Domains",
                "tooltip": "Domains",
                "url": "app/administration/user/domain/ADM_DomainTree.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuOrganizations",
                "name": "Organizations",
                "tooltip": "Organizations",
                "url": "app/administration/user/organization/ADM_ListOrganizations.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuJobs",
                "name": "Jobs",
                "tooltip": "Jobs",
                "url": "app/administration/user/job/ADM_ListJobs.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuAudiences",
                "name": "Audiences",
                "tooltip": "Audiences",
                "url": "app/administration/user/audience/ADM_ListAudiences.aspx"
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuArchiveManager",
                  "name": "Activity Content Manager",
                  "tooltip": "Activity Content Manager",
                  "url": "app/administration/ArchiveManager/ADM_ArchiveManager.aspx"
                }],
                "id": "Administrator_MenuArchiving",
                "name": "Archiving",
                "tooltip": "Archiving",
                "url": ""
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuOrgHierarchy",
                  "name": "Organization Hierarchy",
                  "tooltip": "Organization Hierarchy",
                  "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=HierType&UserMode=2"
                },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuUserStatus",
                    "name": "User Status",
                    "tooltip": "User Status",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=EmpStat&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuSkin",
                    "name": "Skin Management",
                    "tooltip": "Skin Management",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=Skin&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuUserCode",
                    "name": "User Codes",
                    "tooltip": "User Codes",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=EmpCd&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuShortcutBoxes",
                    "name": "Shortcut Boxes",
                    "tooltip": "Shortcut Boxes",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=ShortcutBox&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRoleMgr",
                    "name": "Role Management",
                    "tooltip": "Role Management",
                    "url": "app/administration/Security/roles/ADM_ListRoles.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuSecQuestion",
                    "name": "Secret Questions",
                    "tooltip": "Secret Questions",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=EmpSecQuestion&UserMode=2"
                  }
                ],
                "id": "Administrator_ManageMenuConfigurations",
                "name": "Manage Configurations",
                "tooltip": "Manage Configurations",
                "url": ""
              }
            ],
            "id": "Administrator_MenuManage",
            "name": "Manage",
            "tooltip": "Manage",
            "url": ""
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Administrator_MenuSkills",
              "name": "Skills",
              "tooltip": "Skills",
              "url": "app/administration/skillcompetency/skill/ADM_ListSkills.aspx"
            },
              {
                "childNodes": [],
                "id": "Administrator_MenuCompetencies",
                "name": "Competencies",
                "tooltip": "Competencies",
                "url": "app/administration/skillcompetency/competency/ADM_ListCompetencies.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuBizObj",
                "name": "Business Objectives",
                "tooltip": "Business Objectives",
                "url": "app/management/LMS_DevPlan_BizObjSelect.aspx?UserMode=2&ManageBizObj=1"
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuProfScales",
                  "name": "Proficiency Scales",
                  "tooltip": "Proficiency Scales",
                  "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=ProfScale&UserMode=2"
                },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuProfValues",
                    "name": "Proficiency Values",
                    "tooltip": "Proficiency Values",
                    "url": "app/administration/Security/SupplementalData/ADM_ListProficiencyValues.aspx?UserMode=2"
                  }
                ],
                "id": "Administrator_AssessMenuConfigurations",
                "name": "Assess Configurations",
                "tooltip": "Assess Configurations",
                "url": ""
              }
            ],
            "id": "Administrator_MenuAssess",
            "name": "Assess",
            "tooltip": "Assess",
            "url": ""
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Administrator_MenuTaxonomy",
              "name": "Catalog",
              "tooltip": "Catalog",
              "url": "app/taxonomy/TAX_Tree.aspx?UI=2"
            },
              {
                "childNodes": [],
                "id": "Administrator_MenuLearningActivies",
                "name": "Learning Activities",
                "tooltip": "Learning Activities",
                "url": "app/administration/Learning/Activity/ADM_ListActivities.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuActivityCreateWizard",
                "name": "New Activity Wizard",
                "tooltip": "New Activity Wizard",
                "url": "app/Administration/Learning/Activity/Wizard/ADM_ActivityCreateWizard.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_QuestionBanks",
                "name": "Question Banks",
                "tooltip": "Question Banks",
                "url": "app/administration/QuickAssessment/QuestionBankList.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuEvaluations",
                "name": "Learning Activity Evaluations",
                "tooltip": "Learning Activity Evaluations",
                "url": "app/administration/evaluations/evaluation/ADM_ListEvaluations.aspx"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuPendingSignatures",
                "name": "Pending Signatures",
                "tooltip": "Pending Signatures",
                "url": "app/management/CFR/ADM_ListPendingSignatures.aspx?UserMode=2&SignatureType=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuPublishQueue",
                "name": "Upload",
                "tooltip": "Upload",
                "url": "app/experience/upload/LMS_UploadQueue.aspx?UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_LearnMenuTrainingPlans",
                "name": "Training Plans",
                "tooltip": "Training Plans",
                "url": "app/administration/Learning/TrainingPlan/ADM_ListTrainingPlans.aspx"
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuContentTypes",
                  "name": "Content Types",
                  "tooltip": "Content Types",
                  "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=ConType&UserMode=2"
                },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuMediaTypes",
                    "name": "Media Types",
                    "tooltip": "Media Types",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=MedType&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuEventStatus",
                    "name": "Activity Status",
                    "tooltip": "Activity Status",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=EvtStat&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuLLeDef",
                    "name": "Delivery Methods",
                    "tooltip": "Delivery Methods",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=LEMtd&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuGrades",
                    "name": "Grades",
                    "tooltip": "Grades",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=Grd&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuActivityTypes",
                    "name": "Activity Types",
                    "tooltip": "Activity Types",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=ActLabel&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuPayTerm",
                    "name": "Payment Terms",
                    "tooltip": "Payment Terms",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=PayTerm&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuCostCatgy",
                    "name": "Cost Categories",
                    "tooltip": "Cost Categories",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=CostCatgy&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuPriScales",
                    "name": "Priority Values",
                    "tooltip": "Priority Values",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=Prty&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRegBody",
                    "name": "Regulatory Bodies",
                    "tooltip": "Regulatory Bodies",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=RegBody&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuApprovalsSettings",
                    "name": "Approvals",
                    "tooltip": "Approvals",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=ApprStat&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuCERegion",
                    "name": "CE Regions",
                    "tooltip": "CE Regions",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=CERegion&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuCreditCatType",
                    "name": "CE Credit Category Types",
                    "tooltip": "CE Credit Category Types",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=CreditCatType&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuReqType",
                    "name": "CE Requirement Types",
                    "tooltip": "CE Requirement Types",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=ReqType&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuDeCertifyReason",
                    "name": "Decertification Reasons",
                    "tooltip": "Decertification Reasons",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=DeCertifyReason&UserMode=2"
                  }
                ],
                "id": "Administrator_LearnMenuConfigurations",
                "name": "Learn Configurations",
                "tooltip": "Learn Configurations",
                "url": ""
              }
            ],
            "id": "Administrator_MenuLearn",
            "name": "Learn",
            "tooltip": "Learn",
            "url": ""
          },
          {
            "childNodes": [{
              "childNodes": [],
              "id": "Administrator_MenuVendors",
              "name": "Vendors",
              "tooltip": "Vendors",
              "url": "app/administration/asset/resource/ADM_ListResource.aspx?Tbl=Ven&UserMode=2"
            },
              {
                "childNodes": [],
                "id": "Administrator_MenuFacilities",
                "name": "Facilities",
                "tooltip": "Facilities",
                "url": "app/administration/asset/resource/ADM_ListResource.aspx?Tbl=Fac&UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuLocations",
                "name": "Locations",
                "tooltip": "Locations",
                "url": "app/administration/asset/resource/ADM_ListResource.aspx?Tbl=Loc&UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuEquipments",
                "name": "Equipment",
                "tooltip": "Equipment",
                "url": "app/administration/asset/resource/ADM_ListResource.aspx?Tbl=Equip&UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuApprovals",
                "name": "Resource Approvals",
                "tooltip": "Resource Approvals",
                "url": "app/administration/asset/resource/ADM_ListApprovals.aspx?UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuPO",
                "name": "Purchase Orders",
                "tooltip": "Purchase Orders",
                "url": "app/administration/asset/PurchaseOrders/ADM_ListPO.aspx?UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuAccounts",
                "name": "Accounts",
                "tooltip": "Accounts",
                "url": "app/e-commerce/ui/AccountList.aspx?UserMode=2"
              },
              {
                "childNodes": [],
                "id": "Administrator_MenuNotifTemplates",
                "name": "Notification Templates",
                "tooltip": "Notification Templates",
                "url": "app/administration/Notification/ADM_ListNotfTpl.aspx?UserMode=2"
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuEquipmentTypes",
                  "name": "Equipment Types",
                  "tooltip": "Equipment Types",
                  "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=EquipCatgy&UserMode=2"
                },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuAccountTypes",
                    "name": "Account Types",
                    "tooltip": "Account Types",
                    "url": "app/administration/Security/SupplementalData/ADM_ListData.aspx?DataMode=AccountType&UserMode=2"
                  }
                ],
                "id": "Administrator_ResourcesMenuConfigurations",
                "name": "Resource Configurations",
                "tooltip": "Resource Configurations",
                "url": ""
              }
            ],
            "id": "Administrator_MenuResources",
            "name": "Resources",
            "tooltip": "Resources",
            "url": ""
          },
          {
            "childNodes": [{
              "childNodes": [{
                "childNodes": [],
                "id": "Administrator_MenuTranscriptSignReport",
                "name": "Electronic Signatures Report",
                "tooltip": "Electronic Signatures Report",
                "url": "app/administration/reports/ADM_CFR_SignatureReportFilter.aspx?UserMode=2&ReportType=1"
              },
                {
                  "childNodes": [],
                  "id": "Administrator_MenuTranscriptActivityReport",
                  "name": "Signature Report by Activity",
                  "tooltip": "Signature Report by Activity",
                  "url": "app/administration/reports/ADM_CFR_SignatureReportFilter.aspx?UserMode=2&ReportType=2"
                },
                {
                  "childNodes": [],
                  "id": "Administrator_MenuTranscriptSignerReport",
                  "name": "Signature Report by Signer",
                  "tooltip": "Signature Report by Signer",
                  "url": "app/administration/reports/ADM_CFR_SignatureReportFilter.aspx?UserMode=2&ReportType=3"
                },
                {
                  "childNodes": [],
                  "id": "Administrator_MenuTranscriptLearnerReport",
                  "name": "Signature Report by Learner",
                  "tooltip": "Signature Report by Learner",
                  "url": "app/administration/reports/ADM_CFR_SignatureReportFilter.aspx?UserMode=2&ReportType=4"
                },
                {
                  "childNodes": [],
                  "id": "Administrator_MenuAuditChangeReport",
                  "name": "Audit Change Report",
                  "tooltip": "Audit Change Report",
                  "url": "app/administration/reports/ADM_CFR_AuditReportFilter.aspx?UserMode=2"
                }
              ],
              "id": "Administrator_MenuReports",
              "name": "Reports",
              "tooltip": "Reports",
              "url": ""
            },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuLicenseSettings",
                  "name": "License Settings",
                  "tooltip": "License Settings",
                  "url": "app/maintenance/MNT_LicenseSettings.aspx?UserMode=2"
                },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuMetadataSettings",
                    "name": "Metadata Settings",
                    "tooltip": "Metadata Settings",
                    "url": "app/administration/ADM_MetadataSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuLanguageSettings",
                    "name": "Language Settings",
                    "tooltip": "Language Settings",
                    "url": "app/maintenance/MNT_LanguageSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuCurrencySettings",
                    "name": "Currency Settings",
                    "tooltip": "Currency Settings",
                    "url": "app/maintenance/MNT_CurrencySettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRemoteServers",
                    "name": "Remote Content Servers",
                    "tooltip": "Remote Content Servers",
                    "url": "app/administration/system/RemoteServer/ADM_ListRemoteServers.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuUploadSecurity",
                    "name": "File Upload Security",
                    "tooltip": "File Upload Security",
                    "url": "app/administration/security/FileTypes/ADM_SupportedFileTypes.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuReasonForChange",
                    "name": "Reason for Change",
                    "tooltip": "Reason for Change",
                    "url": "app/administration/security/SupplementalData/ADM_ListData.aspx?DataMode=Audit_Reason&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuSignatureMeaning",
                    "name": "Signature Meaning",
                    "tooltip": "Signature Meaning",
                    "url": "app/administration/security/SupplementalData/ADM_ListData.aspx?DataMode=Signature_Meaning&UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuInstallHistory",
                    "name": "Installation History",
                    "tooltip": "Installation History",
                    "url": "app/administration/ADM_InstallationHistory.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuLogging",
                    "name": "Logging",
                    "tooltip": "Logging",
                    "url": "app/administration/ADM_Logging.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuDatasync",
                    "name": "Datasync Status",
                    "tooltip": "Datasync Status",
                    "url": "app/administration/ADM_Datasync.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuLCMS",
                    "name": "LCMS",
                    "tooltip": "LCMS",
                    "url": "app/administration/ADM_LCMS_Dictionary.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuMobileSettings",
                    "name": "Mobile Settings",
                    "tooltip": "Mobile Settings",
                    "url": "app/maintenance/MNT_MobileSettings.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuSPIntegrationSettings",
                    "name": "SharePoint Integration Settings",
                    "tooltip": "SharePoint Integration Settings",
                    "url": "app/maintenance/MNT_SPIntegrationSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuAudienceSettings",
                    "name": "Audience Settings",
                    "tooltip": "Audience Settings",
                    "url": "app/administration/user/Audience/ADM_AudienceSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuGeneralSettings",
                    "name": "General Settings",
                    "tooltip": "General Settings",
                    "url": "app/maintenance/MNT_GeneralSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuBasicSearchSettings",
                    "name": "Activity Search Settings",
                    "tooltip": "Activity Search Settings",
                    "url": "app/maintenance/MNT_BasicSearchSettings.aspx?UserMode=2"
                  }
                ],
                "id": "Administrator_MenuGlobalSettings",
                "name": "Global Settings",
                "tooltip": "Global Settings",
                "url": ""
              },
              {
                "childNodes": [{
                  "childNodes": [],
                  "id": "Administrator_MenuMessenger",
                  "name": "Notifications",
                  "tooltip": "Notifications",
                  "url": "app/administration/notification/ADM_ListNotificationSettings.aspx?UserMode=2"
                },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuBasicSettings",
                    "name": "Basic Settings",
                    "tooltip": "Basic Settings",
                    "url": "app/maintenance/MNT_BasicSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuUserAccountSettings",
                    "name": "User Account Settings",
                    "tooltip": "User Account Settings",
                    "url": "app/maintenance/MNT_UserAccountSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuHomePageSettings",
                    "name": "Home Page Settings",
                    "tooltip": "Home Page Settings",
                    "url": "app/maintenance/MNT_HomePageSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuActDetails",
                    "name": "Activity Details Settings",
                    "tooltip": "Activity Details Settings",
                    "url": "app/administration/system/ActDetails/ADM_ActDetailsSetup.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuMgrAsgnmntSettings",
                    "name": "Manager Assignment Settings",
                    "tooltip": "Manager Assignment Settings",
                    "url": "app/administration/ADM_MgrAsgnmntSettings.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRegPanel",
                    "name": "Registration Panel Settings",
                    "tooltip": "Registration Panel Settings",
                    "url": "app/administration/system/regpanel/ADM_RegPanelSetup.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRegApproval",
                    "name": "Registration Approval Settings",
                    "tooltip": "Registration Approval Settings",
                    "url": "app/administration/system/approval/ADM_ApprovalSetup.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuEcommerce",
                    "name": "E-Commerce Settings",
                    "tooltip": "E-Commerce Settings",
                    "url": "app/maintenance/MNT_MerchantInfo.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuCrystalSettings",
                    "name": "Crystal Report Server Settings",
                    "tooltip": "Crystal Report Server Settings",
                    "url": "app/management/reporting/RPT_ReportSettings.aspx"
                  },
                  {
                    "childNodes": [{
                      "childNodes": [],
                      "id": "Administrator_MenuAdobe",
                      "name": "Adobe Connect Settings",
                      "tooltip": "Adobe Connect Settings",
                      "url": "app/administration/ADM_AdobeConfig.aspx"
                    },
                      {
                        "childNodes": [],
                        "id": "Administrator_MenuInterwise",
                        "name": "AT&T Connect Settings",
                        "tooltip": "AT&T Connect Settings",
                        "url": "app/administration/ADM_SyncServerConfig.aspx?CP=Interwise"
                      },
                      {
                        "childNodes": [],
                        "id": "Administrator_MenuCentra",
                        "name": "Centra Server Settings",
                        "tooltip": "Centra Server Settings",
                        "url": "app/administration/ADM_CentraConfig.aspx"
                      },
                      {
                        "childNodes": [],
                        "id": "Administrator_MenuILincManager",
                        "name": "iLinc Settings",
                        "tooltip": "iLinc Settings",
                        "url": "app/administration/ADM_SyncServerConfig.aspx?CP=iLinc"
                      },
                      {
                        "childNodes": [],
                        "id": "Administrator_MenuLiveMeeting",
                        "name": "Live Meeting Settings",
                        "tooltip": "Live Meeting Settings",
                        "url": "app/administration/ADM_SyncServerConfig.aspx?CP=LiveMeeting"
                      },
                      {
                        "childNodes": [],
                        "id": "Administrator_MenuWebEx",
                        "name": "WebEx Settings",
                        "tooltip": "WebEx Settings",
                        "url": "app/administration/ADM_SyncServerConfig.aspx?CP=WebEx"
                      }
                    ],
                    "id": "Administrator_MenuVirtualClassRoom",
                    "name": "Virtual Classroom Settings",
                    "tooltip": "Virtual Classroom Settings",
                    "url": ""
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuCFRMgr",
                    "name": "Electronic Signature Settings",
                    "tooltip": "Electronic Signature Settings",
                    "url": "app/administration/System/CFR/ADM_CFR.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuSkillsoft",
                    "name": "Skill Soft Settings",
                    "tooltip": "Skill Soft Settings",
                    "url": "app/administration/ADM_SkillSoftConfig.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuAdminModeSettings",
                    "name": "Administrator Mode Page Settings",
                    "tooltip": "Administrator Mode Page Settings",
                    "url": "app/administration/ADM_AdminModePagesConfig.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRemoteServer",
                    "name": "Remote Content Server Settings",
                    "tooltip": "Remote Content Server Settings",
                    "url": "app/administration/System/RemoteServer/ADM_RemoteServerSettings.aspx?UserMode=2"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuRoleMaskMgr",
                    "name": "Role Mask Settings",
                    "tooltip": "Role Mask Settings",
                    "url": "app/administration/Security/roles/ADM_EditPermissions.aspx?RoleMask=1"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuNews",
                    "name": "News",
                    "tooltip": "News",
                    "url": "app/administration/user/organization/ADM_News.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuDiplomaTemplates",
                    "name": "Diploma Templates",
                    "tooltip": "Diploma Templates",
                    "url": "app/administration/user/domain/ADM_ListDiplomaTemplates.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_TermsAndConditions",
                    "name": "Terms and Conditions",
                    "tooltip": "Terms and Conditions",
                    "url": "app/administration/ADM_ListTermsAndConditions.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuProxySettings",
                    "name": "Proxy Settings",
                    "tooltip": "Proxy Settings",
                    "url": "app/administration/ADM_ProxySettings.aspx"
                  },
                  {
                    "childNodes": [],
                    "id": "Administrator_MenuTRSettings",
                    "name": "TRSettings",
                    "tooltip": "TRSettings",
                    "url": "app/maintenance/MNT_TotalRegulationSettings.aspx?UserMode=2"
                  }
                ],
                "id": "Administrator_MenuDomainSettings",
                "name": "Domain Settings",
                "tooltip": "Domain Settings",
                "url": ""
              }
            ],
            "id": "Administrator_MenuSystem",
            "name": "System",
            "tooltip": "System",
            "url": ""
          }
        ],
        "id": "SysAdministrator",
        "name": "Learning Admin",
        "tooltip": "Administrator",
        "url": null
      },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "admin_users",
            "name": "User Management",
            "tooltip": "",
            "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.users&employeepicker=portalgroupid%3dadmin%26portalitemid%3dusers"
          },
            {
              "childNodes": [],
              "id": "admin_system",
              "name": "System",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.system&employeepicker=portalgroupid%3dadmin%26portalitemid%3dsystem"
            },
            {
              "childNodes": [],
              "id": "admin_content",
              "name": "Content",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.content&employeepicker=portalgroupid%3dadmin%26portalitemid%3dcontent"
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "admin.modules_performance",
                "name": "Performance",
                "tooltip": "",
                "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.modules.performance&employeepicker=portalgroupid%3dadmin%252emodules%26portalitemid%3dperformance"
              },
                {
                  "childNodes": [],
                  "id": "admin.modules_360feedback",
                  "name": "360 Assessments",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.modules.360feedback&employeepicker=portalgroupid%3dadmin%252emodules%26portalitemid%3d360feedback"
                },
                {
                  "childNodes": [],
                  "id": "admin.modules_compensation",
                  "name": "Compensation",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.modules.compensation&employeepicker=portalgroupid%3dadmin%252emodules%26portalitemid%3dcompensation"
                },
                {
                  "childNodes": [],
                  "id": "admin.modules_succession",
                  "name": "Succession Planning",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.modules.succession&employeepicker=portalgroupid%3dadmin%252emodules%26portalitemid%3dsuccession"
                },
                {
                  "childNodes": [],
                  "id": "admin.modules_hrmsadmin",
                  "name": "HR Management",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.modules.hrms&employeepicker=portalgroupid%3dadmin%252emodules%26portalitemid%3dhrmsadmin"
                }
              ],
              "id": "admin_modules",
              "name": "Modules",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.modules&employeepicker=portalgroupid%3dadmin%26portalitemid%3dmodules"
            },
            {
              "childNodes": [],
              "id": "admin_config",
              "name": "Advanced",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?parsetemplate&template=admin/admin_wkspc.htm&sidebargroupid=admin.config&employeepicker=portalgroupid%3dadmin%26portalitemid%3dconfig"
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "reports_generalreports",
                "name": "Reports",
                "tooltip": "",
                "url": "scripts/lightyearisapi.dll?parsetemplate&template=reports/sreporttreenav.htm&sidebargroupid=reports&sidebaritemid=generalreports&employeepicker=portalgroupid%3dreports%26portalitemid%3dgeneralreports"
              },
                {
                  "childNodes": [],
                  "id": "reports_totallmsreportmanager",
                  "name": "Learning Reports",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?http://talent/SumTotal/app/SYS_Login.aspx?&hideMenu=true&sessionid=7b58f947-223a-45e6-a38d-6a9d05e669ad&RU=http://talent/SumTotal/app/management/reporting/rpt_dashboard.aspx?&employeepicker=portalgroupid%3dreports%26portalitemid%3dtotallmsreportmanager"
                },
                {
                  "childNodes": [],
                  "id": "reports_reportcriteria",
                  "name": "Report Criteria",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportcriterialst.open&employeepicker=portalgroupid%3dreports%26portalitemid%3dreportcriteria"
                },
                {
                  "childNodes": [],
                  "id": "reports_reportsources",
                  "name": "Report Sources",
                  "tooltip": "",
                  "url": "scripts/lightyearisapi.dll?invoke&suiaction.value=sreportsourcelst.open&employeepicker=portalgroupid%3dreports%26portalitemid%3dreportsources"
                }
              ],
              "id": "main_reports",
              "name": "Reports",
              "tooltip": "",
              "url": "scripts/lightyearisapi.dll?&employeepicker=portalgroupid%3dmain%26portalitemid%3dreports"
            }
          ],
          "id": "main_admin",
          "name": "Talent Admin",
          "tooltip": "",
          "url": null
        },
        {
          "childNodes": [{
            "childNodes": [],
            "id": "admin.what_run_payroll_report",
            "name": "Payroll Submission",
            "tooltip": "Payroll Submission",
            "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_run_payroll_report&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
          },
            {
              "childNodes": [],
              "id": "admin.what_user_maintenance",
              "name": "User Maintenance",
              "tooltip": "User Maintenance",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_user_maintenance&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_profile",
              "name": "View Details of Who",
              "tooltip": "View Details of Who",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_profile&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.outside_au_ViewAuditHistory",
              "name": "View Audit History",
              "tooltip": "View Audit History",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=outside_au_ViewAuditHistory&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_run_payroll",
              "name": "Run Payroll",
              "tooltip": "Run Payroll",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_run_payroll&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_adjustments",
              "name": "Payroll Adjustments",
              "tooltip": "Payroll Adjustments",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_adjustments&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_pay_policy_export",
              "name": "Pay Policy Export",
              "tooltip": "Pay Policy Export",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_pay_policy_export&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_my_filter_list",
              "name": "My Filter List",
              "tooltip": "My Filter List",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_my_filter_list&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_manage_emp_udfs",
              "name": "Manage Employee UDFs",
              "tooltip": "Manage Employee UDFs",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_manage_emp_udfs&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_filter",
              "name": "Filters",
              "tooltip": "Filters",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_filter&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_filter_administration",
              "name": "Filter Administration",
              "tooltip": "Filter Administration",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_filter_administration&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_emp_reg",
              "name": "Employee Registration",
              "tooltip": "Employee Registration",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_emp_reg&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_emp_mass_update",
              "name": "Employee Mass Update",
              "tooltip": "Employee Mass Update",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_emp_mass_update&when=today&displayType=dashboard&command=get&showActionFrame=true&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_emp_maintenance",
              "name": "Employee Maintenance",
              "tooltip": "Employee Maintenance",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_emp_maintenance&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_controls",
              "name": "Configure Preferences",
              "tooltip": "Configure Preferences",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_controls&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_explicit_namespace_manager",
              "name": "Configure Namespaces",
              "tooltip": "Configure Namespaces",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_explicit_namespace_manager&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            },
            {
              "childNodes": [],
              "id": "admin.what_implicit_namespace_manager",
              "name": "Configure Menu",
              "tooltip": "Configure Menu",
              "url": "/ute/jsp/UnifiedTimeEntry.jsp?who=uteWhoMe&what=what_implicit_namespace_manager&when=today&displayType=dashboard&command=get&showActionFrame=false&TenantKey=47"
            }
          ],
          "id": "admin",
          "name": "Workforce Admin",
          "tooltip": "Admin",
          "url": null
        },
        {
          "childNodes": [{
            "childNodes": [{
              "childNodes": [],
              "id": "ChangeAccountSettings",
              "name": "User Account and Password",
              "tooltip": "",
              "url": "/SelfService?node=ChangeAccountSettings"
            },
              {
                "childNodes": [],
                "id": "AccountPolicies",
                "name": "Account and Password Policies",
                "tooltip": "",
                "url": "/SelfService?node=AccountPolicies"
              },
              {
                "childNodes": [],
                "id": "GenerateInitialPasswords",
                "name": "Generate New User Passwords",
                "tooltip": "",
                "url": "/SelfService?node=GenerateInitialPasswords"
              },
              {
                "childNodes": [],
                "id": "ManagePageAndProcesses",
                "name": "Features Management",
                "tooltip": "",
                "url": "/SelfService?node=ManagePageAndProcesses"
              },
              {
                "childNodes": [],
                "id": "SystemMaintenance",
                "name": "System Maintenance",
                "tooltip": "",
                "url": "/SelfService?node=SystemMaintenance"
              },
              {
                "childNodes": [],
                "id": "I18n",
                "name": "Language",
                "tooltip": "",
                "url": "/SelfService?node=I18n"
              },
              {
                "childNodes": [],
                "id": "SelectResultingStatuses",
                "name": "Resulting Statuses Selection",
                "tooltip": "",
                "url": "/SelfService?node=SelectResultingStatuses"
              },
              {
                "childNodes": [],
                "id": "SelectOrganizations",
                "name": "Organization Selection",
                "tooltip": "",
                "url": "/SelfService?node=SelectOrganizations"
              },
              {
                "childNodes": [],
                "id": "LoadOptionLists",
                "name": "Option List Refresh",
                "tooltip": "",
                "url": "/SelfService?node=LoadOptionLists"
              }
            ],
            "id": "SelfServiceAdmin",
            "name": "System",
            "tooltip": "",
            "url": null
          },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "DependentNumbering",
                "name": "Dependent Numbering",
                "tooltip": "",
                "url": "/SelfService?node=DependentNumbering"
              },
                {
                  "childNodes": [],
                  "id": "RequisitionDescriptions",
                  "name": "Requisition Descriptions",
                  "tooltip": "",
                  "url": "/SelfService?node=RequisitionDescriptions"
                }
              ],
              "id": "HRAdmin",
              "name": "Human Resources",
              "tooltip": "",
              "url": null
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "GroupsAndSubgroups",
                "name": "Benefit Plan Groups",
                "tooltip": "",
                "url": "/SelfService?node=GroupsAndSubgroups"
              },
                {
                  "childNodes": [],
                  "id": "SubgroupAssignment",
                  "name": "Benefit Plan Subgroups",
                  "tooltip": "",
                  "url": "/SelfService?node=SubgroupAssignment"
                },
                {
                  "childNodes": [],
                  "id": "GroupDisplayOrder",
                  "name": "Benefit Plan Display Order",
                  "tooltip": "",
                  "url": "/SelfService?node=GroupDisplayOrder"
                },
                {
                  "childNodes": [],
                  "id": "OrgFlexMasterVerification",
                  "name": "Select Flex Master Plan",
                  "tooltip": "",
                  "url": "/SelfService?node=OrgFlexMasterVerification"
                },
                {
                  "childNodes": [],
                  "id": "FlexMasterPlanMaint",
                  "name": "Flex Master Plan Maintenance",
                  "tooltip": "",
                  "url": "/SelfService?node=FlexMasterPlanMaint"
                },
                {
                  "childNodes": [],
                  "id": "BenefitPlanMaint",
                  "name": "Benefit Plan Maintenance",
                  "tooltip": "",
                  "url": "/SelfService?node=BenefitPlanMaint"
                },
                {
                  "childNodes": [],
                  "id": "DependentCoverageOptions",
                  "name": "Dependent Coverage",
                  "tooltip": "",
                  "url": "/SelfService?node=DependentCoverageOptions"
                },
                {
                  "childNodes": [],
                  "id": "BeneficiaryNumbering",
                  "name": "Beneficiary Numbering",
                  "tooltip": "",
                  "url": "/SelfService?node=BeneficiaryNumbering"
                },
                {
                  "childNodes": [],
                  "id": "BenefitPlanImport",
                  "name": "Import Flex Master Plan Setups",
                  "tooltip": "",
                  "url": "/SelfService?node=BenefitPlanImport"
                },
                {
                  "childNodes": [],
                  "id": "BenefitPlanExport",
                  "name": "Export Flex Master Plan Setups",
                  "tooltip": "",
                  "url": "/SelfService?node=BenefitPlanExport"
                }
              ],
              "id": "BenefitsAdmin",
              "name": "Benefits",
              "tooltip": "",
              "url": null
            },
            {
              "childNodes": [{
                "childNodes": [],
                "id": "HedSetup",
                "name": "Direct Deposit HED Set-Up",
                "tooltip": "",
                "url": "/SelfService?node=HedSetup"
              },
                {
                  "childNodes": [],
                  "id": "SetUpPayAdvice",
                  "name": "Set Up Pay Statement Display",
                  "tooltip": "",
                  "url": "/SelfService?node=SetUpPayAdvice"
                },
                {
                  "childNodes": [],
                  "id": "SetUpMemoHEDs",
                  "name": "Set Up Memo HEDs",
                  "tooltip": "",
                  "url": "/SelfService?node=SetUpMemoHEDs"
                },
                {
                  "childNodes": [],
                  "id": "SetUpRegistrationPeriod",
                  "name": "Registration Period Set-Up",
                  "tooltip": "",
                  "url": "/SelfService?node=SetUpRegistrationPeriod"
                }
              ],
              "id": "PayrollAdmin",
              "name": "Payroll",
              "tooltip": "",
              "url": null
            }
          ],
          "id": "Admin",
          "name": "Payroll Admin",
          "tooltip": "",
          "url": null
        },
        {
          "childNodes": [],
          "id": "FastForwardLogin",
          "name": "Payroll Fast Forward",
          "tooltip": "",
          "url": "http://sptalent:8080/"
        }
      ],
      "id": "ADMINISTRATION",
      "name": "Administration",
      "tooltip": "",
      "url": null
    }];
  });
