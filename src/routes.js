import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BaseComponent from './components/base/component';

import NotFoundComponent from './components/base/notFound/component';

import IndexComponent from './components/base/index/component';
import AboutComponent from './components/base/about/component';
import LoginComponent from './components/base/login/component';
import IdentityComponent from './components/base/identity/component';
import AccountCreationComponent from './components/base/accountCreation/component';
import SendEmailMessageComponent from './components/base/sendEmailMessage/component';

import DetailsComponent from './components/details/component';
import DetailsIndexComponent from './components/details/index/component';
import HistoryForm1Component from './components/details/historyForm1/component';
import CoverageFormComponent from './components/details/coverageForm/component';
import AssessmentFormComponent from './components/details/assessmentForm/component';
import SignFormComponent from './components/details/signForm/component';

import MainComponent from './components/main/component';
import PolicyComponent from './components/main/policy/component';
import InitInfoComponent from './components/main/policy/info/initInfoComponent';
import PaySmartDepositComponent from './components/main/policy/info/paySmartDeposit/component';
import ReviewTaskInfoComponent from './components/main/policy/info/reviewTask/component';
import WalletInfoComponent from './components/main/policy/info/wallet/component';

export const urls = {
  index: {
    path: '/'
  },
  about: {
    path: '/about'
  },
  login: {
    path: '/login'
  },
  identity: {
    path: 'identity'
  },
  accountCreation: {
    path: 'account-creation'
  },
  sendEmail: {
    path: 'send-email'
  },
  details: {
    path: '/details',
    historyForm1: {
      path: '/history-form-1'
    },
    coverageForm: {
      path: '/coverage-form'
    },
    assessmentForm: {
      path: '/assessment-form'
    },
    signForm: {
      path: '/sign-form'
    }
  },
  main: {
    path: '/main',
    policy: {
      path: '/policy',
      wallet: {
        path: '/policy/wallet'
      },
      smartDeposit: {
        path: '/policy/smart-deposit'
      },
      reviewTask: {
        path: '/policy/review-task/'
      }
    },
  }
};

export default (
  <Route>
    <Route path={urls.index.path} component={BaseComponent}>
      <IndexRoute component={IndexComponent} />
      <Route path={urls.about.path} component={AboutComponent} />
      <Route path={urls.login.path} component={LoginComponent} />
      <Route path={urls.identity.path} component={IdentityComponent} />
      <Route path={urls.accountCreation.path} component={AccountCreationComponent} />
      <Route path={urls.sendEmail.path} component={SendEmailMessageComponent} />
    </Route>
    <Route path={urls.details.path} component={DetailsComponent}>
      <IndexRoute component={DetailsIndexComponent} />
      <Route path={urls.details.historyForm1.path} component={HistoryForm1Component} />
      <Route path={urls.details.coverageForm.path} component={CoverageFormComponent} />
      <Route path={urls.details.assessmentForm.path} component={AssessmentFormComponent} />
      <Route path={urls.details.signForm.path} component={SignFormComponent} />
    </Route>

    <Route path={urls.main.path} component={MainComponent}>
      <Route path={urls.main.policy.path} component={PolicyComponent}>
        <IndexRoute component={InitInfoComponent} />
        <Route path={urls.main.policy.smartDeposit.path} component={PaySmartDepositComponent} />
        <Route path={`${urls.main.policy.reviewTask.path}:taskId`} component={ReviewTaskInfoComponent} />
        <Route path={urls.main.policy.wallet.path} component={WalletInfoComponent} />
      </Route>
    </Route>
    <Route path="*" component={NotFoundComponent} />
  </Route>
);
